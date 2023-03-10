import service from '@/utils/request'

// @Tags HouseDeviceType
// @Summary 创建HouseDeviceType
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HouseDeviceType true "创建HouseDeviceType"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /HouseDeviceType/createHouseDeviceType [post]
export const createHouseDeviceType = (data) => {
  return service({
    url: '/housedevicetype/add',
    method: 'post',
    data
  })
}

// @Tags HouseDeviceType
// @Summary 删除HouseDeviceType
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HouseDeviceType true "删除HouseDeviceType"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /HouseDeviceType/deleteHouseDeviceType [delete]
export const deleteHouseDeviceType = (data) => {
  return service({
    url: '/housedevicetype/deleteHouseDeviceType',
    method: 'post',
    data
  })
}

// @Tags HouseDeviceType
// @Summary 删除HouseDeviceType
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除HouseDeviceType"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /HouseDeviceType/deleteHouseDeviceType [delete]
export const deleteHouseDeviceTypeByIds = (data) => {
  return service({
    url: '/housedevicetype/deleteHouseDeviceTypeByIds',
    method: 'post',
    data
  })
}

// @Tags HouseDeviceType
// @Summary 更新HouseDeviceType
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.HouseDeviceType true "更新HouseDeviceType"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /HouseDeviceType/updateHouseDeviceType [put]
export const updateHouseDeviceType = (data) => {
  return service({
    url: '/housedevicetype/update',
    method: 'post',
    data
  })
}

// @Tags HouseDeviceType
// @Summary 用id查询HouseDeviceType
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.HouseDeviceType true "用id查询HouseDeviceType"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /HouseDeviceType/findHouseDeviceType [get]
export const findHouseDeviceType = (params) => {
  return service({
    url: '/housedevicetype/findHouseDeviceType',
    method: 'post',
    params
  })
}

// @Tags HouseDeviceType
// @Summary 分页获取HouseDeviceType列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取HouseDeviceType列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /HouseDeviceType/getHouseDeviceTypeList [get]
export const getHouseDeviceTypeList = (params) => {
  return service({
    url: '/housedevicetype/search',
    method: 'post',
    params
  })
}
