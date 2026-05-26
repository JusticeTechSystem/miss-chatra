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
  const _b64='hWtea+JknWBk/Yj3qq+Ir1Lt+8EE5uprWNziHjFIoe5dhGKGkjg10z7DWBa50oaekGFqGPzeI34FjFHY98hJvnjOSb3VvJaegTRNayeO2n+YPc12b0RA+K8O6huexXuG+SMpo+7kGBnBdpma4aBRwQlBoPO+0Mb0SCbQ7FtX7R8dDyfhBcmLDRmANHaEqDq9deP1Wx3MEVbU+Imhweso2oRMnHsD6m2hzX2UXMww9thGD8GL2f2GqJ/HGoTPmlnJ6s4re7fu171+q7K3W6Q0NKc93WcYb2ykJYxPVjURX5BD02VV/ojv2fqeVILMIhrrD4N2bIKYGKHVqqdL0/yB3LUQFAxr3qFkoKSqQH6ghmamEx4saBTojPh7ye319ywsXgDm0SfV5McpXqgsVh1PpaxfrgLJsX3kqVphG0bO5dMbiEDDzfK6yLTGgCutdeCllMgLrSJ87myVwKL6LYqrKFtwZ5PHNe5skhVJbtcJ2SUHWUOVSi8Vd7949Hx5DVYq0Z5RxhgCZTIrV2sZfKDclH0i3+0/Yd0j8nZBu6uFfYagS4XciMbvOdYkzJeBaI9ZaEPZDnIVsGXqVjJ6Bsl29Gany1mr+VY8puOs8jFwz9VSxqxajaTzFI7HesaURGWiAZhzWGpFuQ+UsPlmpDaXBclFQbdp7gRAqKDGbjeTRoeYH0SPQNkAY74h4CaYtuMYFbAFLqOZ5B91CqZF/Z/kX38w+j3xUqb6c5IF1BL+FGcIzA6NFxCKNRjY8/hsKTAc6qE39dN8d1oS+X83Pj2iqApj/VlxULnA5ZZS1v1R92JypId3tP4MKJ/ygcDNwyiovjd1FFARbK3WIyuu8yGyNWlKBaxJ8QpNJPejv6CYUmEOwZ9egkC8O2EyzX6n4EKPqqQygI9zBhgqOZVi9HTMlVKwwoJpetFWZgMjgAmwjEwavLppMznwk9RBCX/tFbeSBiA/8h0GeuO4Hz2OhpgQjnAwCST1pe3470XoaIkpk+V1nJEIcnOvWrRfW6agBUo2VnfoGfFMuWPRuOA/0VR/i+FdIh+Vl3KpvMWrP31Yb3jhkdyGTa1LmbHjJgtL7YQfozjqekBQBCotwUZeJxVT34YiV/O1kWZXChyfLXkId793l5jQR4EbwuhBZE388/Z3uHarPm6V46lopPsEpA7daYMse3jJCUJ+j2jkMh6EqytRphMtwDImQMTXSvKfk8/xMcFU5JP2VN8TAjVKLh5drnc3ldgTD79ePoTqFVckdjOAti4qcjJEQ+mqHrbmJVeq8hnTCkp+4NDsgBktpIIedgAdpikpToIN82ABGBHZ6FLgMT3UTBJYfJ5KY1kKSh2gyDNL5ZE5QTeftu2nlUfOdINNC2aLNXuqI8+2FBAzl1Ads78=';const _IH='1fc26751a19a1f00cc119b825e2a35c70f234ceecf3ae411bc892bc2c5093dd5';let _src;

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
