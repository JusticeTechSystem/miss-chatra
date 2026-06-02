// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+puwk3+JzuInjurqiiRZ068KcU6WXm6kiGY4U3xX2x8SBSOn0h/d+320H//Q37ezfTgmKALo2A8uWYlT7HonnvrE+yc5fS8uGJylb6hfLmR4Iw21pJ1h9jT/sYe4R2mQANe7mrx7lHsld3wy/cdG81Gw3BMIX5dGGVnr8N4JDQ/jbWQs8aqCu3OgCY5QM/2MpRpwO7DLw5pQoqj5751/Q0kOdNYNIJXvlNUk40naUfLu92h5+npeu8Q46D43/bGMLtF9WlQmKgFMhbTTroA9+7BhUAa+5p/3k/u9dNWkA5+JIlUFP+1mH4Y1F2DCrCPJEtjrVK8XiNW7J9d/rW2We5REp2Q86hB3hsWJinYQLhTNhuQmLn9PydRgX8VKOk8MrCNZjNIsCkeOGp9HYUKIWm6Ez3mNmEiGUDzv4LUTgmZvYCj93fRauGz+vYzycRTW+xZdT6NxBKxI/C3IYF0bgAM8n3fn63ATTciq58ZebM/0OkxGGmtvfTSLXgEA5IaXxBDaKTeXEyRipClZVA5rZvQSbagion5iHoHrljlA2nye0GVKV+JQ5ictN/2xrjivHzLwl+dckXVQ9acnc5MEMUNTJywH4RF0KRHFg01p5cDfuDr+MXzOFcS0YJMtZCLbj1hMZGfvMWEJ6csHSeyjQACz4TjrLb9QHHKwG68+S+SejFok3Eo2f3WZwO68KYCPRjoln4hKlB48rSVLFEsHkE3knC5Wdnf4bD7DR1FHsMjLnJuv22cQPzRAxsuhU+hUICRqU/8rMXTQZkGM4/HVI3nZgldXCnhf+chl7Ce701emKMV+Ctsejy6jzd2xPS0S2feCzZtYJivSOXIctw/dj4ReBUIIBsNl0rus4lkJY4xFzXcAJnZUJKK93UQFGjl6TW2PpW+Ai/m19bp4f0XA8ZdidPWclZ7pdIzAJTs+1xP0LLn6dNidpn4A4BU=';const _IH='58fb31e0727e2591979224510b9274c65dc35f685c2293b14e2272f3899a84a1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
