import React from "react"
import cx from "classnames"

const Separator = ({ className, ...rest }) => (
  <div className={cx("bg-primary w-3 h-1", className)} {...rest} />
)

export default Separator
