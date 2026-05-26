// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eTukRgCyb8J8QC15dZqmAIyF/nykadi6s0Khn0NyfiIZl9hxfjS23S1sN9YgMG3cEWEWG9q7A+HObjraR3/O6qycAs3tNvpRgN7t9wT0OPCwPQAymc2lYoc0wzWCURA6QhPBdkGF9vWJNgnMf25HFL5IDuujr+LkE0cjC5fI7rGIcR0DZIo1Qs2dJrhdOLRqQDTGFdyIAYTByv1WbBPP6RwyuoQNKXQ43Qg+h4PH17+5E36Bl2WdRfPXOxOJjwsTgv5YQuELlxSjj9DBbPnDqQ+8fz7jImBeB757K+GtSlEB9Pt4oH58s/Q6lY7gTqUIGFETu+O6DS9UDatQuzTWBxWYDRZ4EOVWyB0f648FJrdT2np+XjO74yyqkZyhXlx2LJF7uS7Asx5OIrIc8slguttoew0zOXHLxt+rHAJxdXjr//90CGXCnss105oz2JnVmbnjOjGsDsQ2MxcHGZz/L3rVnWxJlSS4UHToaTPSPHCA7DVS5DaozUmllEPnJ7vD4wLNscQe/SX223WOy2gjcuAPG9IjeMa9dThXodUWShGfkD9+EbOKP6Py0jci6huIf/70pDRtWcAhf2BdD0VZ6EaLLl2ww6MuwlMCSRJsKZ1IbtqADGh34CMWC+U6ePcjy+M85FYiW4yOtMDcpPXu5zh91fyIq8KEWIplAcBSWPVJ4xzcy/cXhAydzfr1Si3Cie+Nu69cUPjNl3tP8BG+D43UlgGM5TuwOEz1wAvzwo4OwkvOYcvp4c/Q';const _IH='0dd79ee932275d54bd3e7b116124bc3588b305b185948bdcba2f3fef15f823e1';let _src;

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
