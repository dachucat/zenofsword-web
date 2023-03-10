import service from '@/utils/request'

// @Tags CarCompany
// @Summary 创建CarCompany
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CarCompany true "创建CarCompany"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /CarCompany/createCarCompany [post]
export const createCarCompany = (data) => {
  return service({
    url: '/carCompany/add',
    method: 'post',
    data
  })
}

// @Tags CarCompany
// @Summary 删除CarCompany
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CarCompany true "删除CarCompany"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /CarCompany/deleteCarCompany [delete]
export const deleteCarCompany = (data) => {
  return service({
    url: '/carCompany/deleteById',
    method: 'post',
    data
  })
}

// @Tags CarCompany
// @Summary 删除CarCompany
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body request.IdsReq true "批量删除CarCompany"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"删除成功"}"
// @Router /CarCompany/deleteCarCompany [delete]
export const deleteCarCompanyByIds = (data) => {
  return service({
    url: '/carCompany/deleteById',
    method: 'post',
    data
  })
}

// @Tags CarCompany
// @Summary 更新CarCompany
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data body model.CarCompany true "更新CarCompany"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"更新成功"}"
// @Router /CarCompany/updateCarCompany [put]
export const updateCarCompany = (data) => {
  return service({
    url: '/carCompany/update',
    method: 'post',
    data
  })
}

// @Tags CarCompany
// @Summary 用id查询CarCompany
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query model.CarCompany true "用id查询CarCompany"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"查询成功"}"
// @Router /CarCompany/findCarCompany [get]
export const findCarCompany = (params) => {
  return service({
    url: '/carCompany/findCarCompany',
    method: 'post',
    params
  })
}

// @Tags CarCompany
// @Summary 分页获取CarCompany列表
// @Security ApiKeyAuth
// @accept application/json
// @Produce application/json
// @Param data query request.PageInfo true "分页获取CarCompany列表"
// @Success 200 {string} string "{"success":true,"data":{},"msg":"获取成功"}"
// @Router /CarCompany/getCarCompanyList [get]
export const getCarCompanyList = (params) => {
  return service({
    url: '/carCompany/search',
    method: 'post',
    params
  })
}
