import React from 'react'

type Props = {
  title: string
  children: React.ReactNode
  rightSideElement?: React.ReactNode
  noStyle?: boolean
}

export const ListGroup = React.memo<Props>(({ title, rightSideElement, children, noStyle }) => {
  return (
    <div className="list-group">
      <h2 className="mb-1 text-sm font-medium text-gray-500 dark:text-gray-400">
        <div className="flex justify-between">
          <p className="mb-1 text-sm">{title}</p>
          {rightSideElement}
        </div>
      </h2>
      <div
        className={
          noStyle ? '' : 'overflow-hidden rounded-xl border bg-background dark:bg-zinc-800'
        }
      >
        {children}
      </div>
    </div>
  )
})

ListGroup.displayName = 'ListGroup'
