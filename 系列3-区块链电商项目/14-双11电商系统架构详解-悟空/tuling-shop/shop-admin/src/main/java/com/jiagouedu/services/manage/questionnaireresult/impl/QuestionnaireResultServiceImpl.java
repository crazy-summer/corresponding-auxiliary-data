package com.jiagouedu.services.manage.questionnaireresult.impl;import com.jiagouedu.core.ServersManager;import com.jiagouedu.services.manage.questionnaireresult.QuestionnaireResultService;import com.jiagouedu.services.manage.questionnaireresult.bean.QuestionnaireResult;import com.jiagouedu.services.manage.questionnaireresult.dao.QuestionnaireResultDao;import org.springframework.stereotype.Service;import javax.annotation.Resource;@Service("questionnaireResultServiceManage")public class QuestionnaireResultServiceImpl extends		ServersManager<QuestionnaireResult, QuestionnaireResultDao> implements        QuestionnaireResultService {    @Resource(name = "questionnaireResultDaoManage")    @Override    public void setDao(QuestionnaireResultDao questionnaireResultDao) {        this.dao = questionnaireResultDao;    }}