// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iY1OrNkjQgKQIalrcbOHeE/KBzUV3lwxMrlvET17tHC7ICm3hfDjxdwIQQT0mi6CMY5WmArLDa7gzXwpp6UaTa660teHgHFD61HVk9cem+qsZSh3qsPQEHbztTINpItRl6+RwLQfkrS4JBh5eUc84L69pvuJtd0k3AdkYlp6OMlfQzuE3YWI4df4ZlTAAHls+oQWdskTdbpT0gg0Yi6IO9l1qlKLFJTMuPCyPoYSQHn87DU27iLbuooqsQY9/SYjhdarX2ZiI7Q7Bu0lp4CXtBh/R3MCz2yzVfl6r+IuVnF0i7DG80AtLJrGah8Hhy8VSM1Bp3nb+1ZfB5DKuWlRnyldr10SmAHul3TaFXSrBexTqLo2FZRVckE/W60v0OtAy0+3Xy/+DjR9OPU0AxYdTIjxx9sHQMWjwiSlLNfe5tMv0Olk4ykB+s9Z9ilLa8d15lh9P5AgoRe+sjsBEdwyETzDIcvJUsHsOasYr3lUQjaSCqR1WJnEawMtgVdU6eyeY2JYzOTYzeRTgcaDjGiWjkezA+t7TYfCacYuBBB1csyji3zCkx9YrJEKiSOel35GmiAsmXZJ7lmrjEDZpdbcXlGi4esbqS+h1C8lL8BDPm3G5POSPLsQuafnPZZgS64Kdg5ICVaMh6Ws6wJoCK2xuDoFyz4RNxl/1RnwvykCwVfhnSjwaDML/BHdbeRDYRUl1rY5hyFb+6WtiAKHAE/YFWMOb75UwEtpTmgA7tAFeRV8v4dotlTDIGaFI2k7v6H70juLGvskF0HDEggiRStvPt57EII5P6LxypSv6mainp7zZkVmbcQAWfzoLhpa/0RDpKm+kW73CnhNmY4VZ/nJ4DxdBRrSgBSWGfW5mtQVzPk4J6WVtrZ3j1+jHdW1falE9tQ5Kk+vP55mx1E4Z3eK2+Je9l9rYe0JkI88ZCmZE5lcSx/sp0JnmNfrRBUMQQd0TKgPxFseB75wNL8C5w7OaxLWl9MdnOcR7oBQJx/z0qthmPp26pQBMW24JdwzP4Ipi3Q9jjopPPTxQwlJYaL12aAzef0K4PuB3LYLjX/XfKs4SnXJwPr5QHL6px6u8UIaCzsF2TlNupswOmWGqKR9d+txPbv1ITAuWjWQtVfOqLb6gtCyiHSng0mz/GlYVvswX5Yn73U+hK3rPSX/Kzr8bScifH98RAThUm3aionBGLapnX3MQn7MFE0WPrk4fghVaMfoXRMULuaQ3ROZGKhiTrRm3KhkW99K3DMPxn+4xoO89JdUJXvRIaEB5bRTksJAr0alK60MIED+ClepuE6vkeWIru7tO2BAuZrjJ+wI6mKdRnyARdRtzE/HKIxLIVxeHEVw0Fv5ZpvSsrF7MuLJvHdeKmA8N50YRwBBkV0xaZFEeBo=';const _IH='03e9732a68c0885b2882795e00a95a16923bde854bea69e3b4b53f72eb57d147';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
