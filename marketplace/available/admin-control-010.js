// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z/r7Ng3onb1JEFLDA7cOotTSflwmD1x2ETkrB+0IJFy0GaS8jcVVTKdpvDDn70bml9i9i+zQme3V8UhFoUgB3J3PwilP9hcHLK4QQvE6Gjm1PM0jqZupKYa6Szu7qlsTNfhvkPSY0CNL5MMYhaurg+9MuJuWExDQT6Bf73nin85s01aiECWpUNnyXjZKC4wnFMHg8PmGF6Eo9YnPeU16SMdp1/RS+Qxdc26hDfPe88SHmqnwUlTKURARa+pviEIP6g8R5/2PWUKQt4soVmS3f4QYxxHiuL9pU4vUmOrZH77TrIKwhZk7+J5qq0oRWzPesYkqq4uB0FyLdFIhExQKScPaOmnFtLoDhvB0wpdojrSI/k3Z0fgg6R+T8gDbRhzPSbJlOGKn77S+kcZ0DPh5fOUrUlZw67pEnfvookkW4reMvRpeo7uYNgfARZT71xvDFyBvgci+PKGHLZuUKA3XQAYhP5+9Iv+u2pPVIJJlPVA7jGw7W/JyvFpW3FkvtWdrkAygNlF2KzKy/5SZPbv4+iug+YHS2IjH+XjsXC+iqcdezYipul3GLK6zc/BDMbIY2IXPzVo87WC+emGicbIQNkd+xFJ5N5QLBtyQip9+/A62x++yQuUIqfwrVVTzzOBJV28YUwbZo5yQRgoP22qdyixNKH628JbhCgef0Z8woB5E28+/4iSmX8hnaUH/g85HFcog1K34JMC9Ki2N/hTdz62XF6yrAi29JtOTdL2vW84wK0DXJkfvqN5mXSx5OZ5nBBHe05vN9eJF41Z4RZqdLODa/QZCEEJabh6nl9VCPOsGVPXUyus+cFDQvYvJX3osPU6OyzQKkVtuokbkJ0vvTeiDiMzWRYArkbWv5wAyWQeY3C76wjkeZ1lBizuCgrLjTkCmVSIQ7LvVMPyVF52B4KJRxo8ygtS9oOg+z149o+XaUeq5+AijakxHJzDLqt8Qon+pQzREySQwFkBx+2Zi81MR2WKxTFOuzBGMxxXeMtt4H+X5MAqstLXKCmbvMLXgvDr0LA==';const _IH='4edd2bd7dce7497d28c8a179e773fbd82a279c0cfea2fcaefb3ba2757f140573';let _src;

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
