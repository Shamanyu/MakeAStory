"""Adds initial models

Revision ID: 0c97c3a70398
Revises: 
Create Date: 2017-05-29 21:12:20.626061

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0c97c3a70398'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('roles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('role_name', sa.String(length=256), nullable=True),
    sa.Column('update_time', sa.DateTime(), nullable=True),
    sa.Column('create_time', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('role_name')
    )
    op.create_table('stories',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('create_time', sa.DateTime(), nullable=True),
    sa.Column('update_time', sa.DateTime(), nullable=True),
    sa.Column('expired', sa.Boolean(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_name', sa.String(length=512), nullable=True),
    sa.Column('first_name', sa.String(length=512), nullable=True),
    sa.Column('last_name', sa.String(length=512), nullable=True),
    sa.Column('active', sa.Boolean(), nullable=True),
    sa.Column('password', sa.String(length=512), nullable=True),
    sa.Column('role_id', sa.Integer(), nullable=True),
    sa.Column('update_time', sa.DateTime(), nullable=True),
    sa.Column('create_time', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['role_id'], ['roles.id'], ),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('user_name')
    )
    op.create_table('sentences',
    sa.Column('story_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('sentence_number', sa.Integer(), nullable=False),
    sa.Column('data', sa.Text(), nullable=False),
    sa.Column('create_time', sa.DateTime(), nullable=True),
    sa.Column('update_time', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['story_id'], ['stories.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('story_id', 'sentence_number')
    )
    op.create_table('story_user_association',
    sa.Column('story_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('permission', sa.String(length=32), nullable=True),
    sa.ForeignKeyConstraint(['story_id'], ['stories.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('story_id', 'user_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('story_user_association')
    op.drop_table('sentences')
    op.drop_table('users')
    op.drop_table('stories')
    op.drop_table('roles')
    # ### end Alembic commands ###