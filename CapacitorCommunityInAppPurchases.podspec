
  Pod::Spec.new do |s|
    s.name = 'CapacitorCommunityInAppPurchases'
    s.version = '0.0.1'
    s.summary = 'In app purchases plugin for iOS and Android Capacitor apps'
    s.license = 'MIT'
    s.homepage = 'https://github.com/capacitor-community/in-app-purchases'
    s.author = 'Max Lynch <max@ionic.io>'
    s.source = { :git => 'https://github.com/capacitor-community/in-app-purchases', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end