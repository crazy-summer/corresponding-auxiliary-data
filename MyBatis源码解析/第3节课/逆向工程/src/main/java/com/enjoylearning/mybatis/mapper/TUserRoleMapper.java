package com.enjoylearning.mybatis.mapper;

import com.enjoylearning.mybatis.entity.TUserRole;
import org.apache.ibatis.annotations.Param;

public interface TUserRoleMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated
     */
    int deleteByPrimaryKey(@Param("roleId") Integer roleId, @Param("userId") Integer userId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated
     */
    int insert(TUserRole record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table t_user_role
     *
     * @mbg.generated
     */
    int insertSelective(TUserRole record);
}