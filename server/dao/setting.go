// -*- coding: utf-8 -*-
// @Time    : 2022/8/18 10:58
// @Author  : Nuanxinqing
// @Email   : nuanxinqing@gmail.com
// @File    : setting.go

package dao

import "QLToolsPro/server/model"

// GetSettings 获取所有配置信息
func GetSettings() ([]model.WebSettings, error) {
	var items []model.WebSettings
	if err := DB.Find(&items).Error; err != nil {
		return nil, err
	}
	return items, nil
}

// SaveSettings 保存配置信息
func SaveSettings(items *[]model.WebSettings) error {
	return DB.Save(items).Error
}

// GetSetting 获取一个配置信息
func GetSetting(name string) (model.WebSettings, error) {
	var items model.WebSettings
	if err = DB.Where("key = ? ", name).First(&items).Error; err != nil {
		return items, err
	}
	return items, nil
}
