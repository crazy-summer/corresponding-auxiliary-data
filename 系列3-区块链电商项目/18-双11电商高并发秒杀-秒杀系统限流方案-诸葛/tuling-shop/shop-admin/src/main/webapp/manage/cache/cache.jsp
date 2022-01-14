<%@page import="ManageContainer"%>
<%@ page contentType="text/html; charset=UTF-8"%>
<%@ page session="false"%>
<%@ taglib uri="http://jsptags.com/tags/navigation/pager" prefix="pg"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%--
  ~ Copyright 2021-2022 the original author or authors.
  ~
  ~ Licensed under the Apache License, Version 2.0 (the "License");
  ~ you may not use this file except in compliance with the License.
  ~ You may obtain a copy of the License at
  ~
  ~     http://www.apache.org/licenses/LICENSE-2.0
  ~
  ~ Unless required by applicable law or agreed to in writing, software
  ~ distributed under the License is distributed on an "AS IS" BASIS,
  ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  ~ See the License for the specific language governing permissions and
  ~ limitations under the License.
  --%>

<!DOCTYPE html>
<html>
<head>
<%@ include file="/resource/common_html_meat.jsp"%>
<%@ include file="/manage/common.jsp"%>
</head>

<body>
	<table class="table table-bordered">
		<tr>
			<td colspan="8">
				<a href="cacheImpl.jsp" target="_blank"
				class="btn btn-primary"> <i class="icon-refresh icon-white"></i>
					加载后台缓存
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="8">
				<a href="frontCacheImpl.jsp" target="_blank"
				class="btn btn-success"><i class="icon-refresh icon-white"></i>
					加载前台缓存
				</a>
			</td>
		</tr>
	</table>

	<table class="table table-bordered">
		<tr>
			<td colspan="8">
				<h4>明细缓存操作</h4>
			</td>
		</tr>
		<tr>
			<td colspan="5">
				<a href="frontCacheImpl.jsp?method=activity" target="_blank"
				class="btn btn-info"><i class="icon-refresh icon-white"></i>
					加载活动+活动商品列表
				</a>
			</td>
			<td>
				<a href="frontCacheImpl.jsp?method=loadIndexImgs" target="_blank"
				class="btn btn-info"><i class="icon-refresh icon-white"></i>
					门户滚动图片
				</a>
			</td>
			<td>
				<a href="frontCacheImpl.jsp?method=loadAdvertList" target="_blank"
				class="btn btn-info"><i class="icon-refresh icon-white"></i>
					广告列表
				</a>
			</td>
			<td>
				<a href="frontCacheImpl.jsp?method=loadNotifyTemplate" target="_blank"
				class="btn btn-info"><i class="icon-refresh icon-white"></i>
					加载邮件模板列表
				</a>
			</td>
			<td>
				<a href="frontCacheImpl.jsp?method=loadProductStock" target="_blank"
				class="btn btn-info"><i class="icon-refresh icon-white"></i>
					加载商品内存库存
				</a>
			</td>
		</tr>
		<tr>
			<td colspan="15">
				<a href="frontCacheImpl.jsp?method=hotquery" target="_blank"
				class="btn btn-info"><i class="icon-refresh icon-white"></i>
					热门查询关键字
				</a>
			</td>
		</tr>
	</table>
</body>
</html>
