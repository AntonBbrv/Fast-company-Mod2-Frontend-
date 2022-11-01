import React from 'react'
import PropTypes from 'prop-types'
// import TableHeader from './tableHeader'
// import TableBody from './tableBody'
import Bookmark from './bookmark'
import QualitiesList from './qualitiesList'
import Table from './table'
import { Link } from 'react-router-dom'

const UsersTable = ({
  userCrop,
  onSort,
  selectedSort,
  onToggleBookmark,
  onDelete,
  ...rest
}) => {
  const columns = {
    name: {
      path: 'name',
      name: 'Имя',
      component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>
    },
    qualities: {
      name: 'Качества',
      component: (user) => <QualitiesList qualities={user.qualities} />
    },
    profession: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: {
      path: 'completedMeetings',
      name: 'Встретился, раз'
    },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <Bookmark
          status={user.bookmark}
          onToggleBookmark={onToggleBookmark}
          id={user._id}
        />
      )
    },
    delete: {
      component: (user) => (
        <button
          className="btn btn-danger m-0"
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      )
    }
  }

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={userCrop}
    >
      {/* <TableHeader {...{ onSort, selectedSort, columns }} />
      <TableBody {...{ columns, data: userCrop }} /> */}
    </Table>
  )
}

UsersTable.propTypes = {
  userCrop: PropTypes.array,
  onSort: PropTypes.func,
  onDelete: PropTypes.func,
  onToggleBookmark: PropTypes.func,
  selectedSort: PropTypes.object.isRequired
}

export default UsersTable