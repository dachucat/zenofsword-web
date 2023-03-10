import service from '@/utils/request'

// @Tags RentHouseInfo
// @Summary 创建RentHouseInfo
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.RentHouseInfo true "创建RentHouseInfo"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /rentHouseInfo/createRentHouseInfo [post]
export const createRentHouseInfo = (data) => {
  return service({
    url: '/rentHouseInfo/createRentHouseInfo',
    method: 'post',
    data
  })
}

// @Tags RentHouseInfo
// @Summary 删除RentHouseInfo
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.RentHouseInfo true "删除RentHouseInfo"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /rentHouseInfo/deleteRentHouseInfo [delete]
export const deleteRentHouseInfo = (data) => {
  return service({
    url: '/rentHouseInfo/deleteRentHouseInfo',
    method: 'delete',
    data
  })
}

// @Tags RentHouseInfo
// @Summary 删除RentHouseInfo
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除RentHouseInfo"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /rentHouseInfo/deleteRentHouseInfo [delete]
export const deleteRentHouseInfoByIds = (data) => {
  return service({
    url: '/rentHouseInfo/deleteRentHouseInfoByIds',
    method: 'delete',
    data
  })
}

// @Tags RentHouseInfo
// @Summary 更新RentHouseInfo
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.RentHouseInfo true "更新RentHouseInfo"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /rentHouseInfo/updateRentHouseInfo [put]
export const updateRentHouseInfo = (data) => {
  return service({
    url: '/rentHouseInfo/updateRentHouseInfo',
    method: 'put',
    data
  })
}

// @Tags RentHouseInfo
// @Summary 用id查询RentHouseInfo
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.RentHouseInfo true "用id查询RentHouseInfo"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /rentHouseInfo/findRentHouseInfo [get]
export const findRentHouseInfo = (params) => {
  return service({
    url: '/rentHouseInfo/findRentHouseInfo',
    method: 'get',
    params
  })
}

// @Tags RentHouseInfo
// @Summary 分页获取RentHouseInfo列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取RentHouseInfo列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /rentHouseInfo/getRentHouseInfoList [get]
export const getRentHouseInfoList = (params) => {
  return service({
    url: '/rentHouseInfo/getRentHouseInfoList',
    method: 'get',
    params
  })
}
