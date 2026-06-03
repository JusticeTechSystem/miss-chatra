// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+sYbLLrdVtJpLktF7shX52xoIcrn/Datrdc+KHz+rN3CP30x2bae5dRC10csz515algDEHKA7KtM8eOt37hH69gEhmNFs5yw2aaeoZPtWUDXmYjaZJ6wxC2CSCNmoA2vbWRf6V/oGEAI3a7FtdaGLjj3bz79STiI2z7et3oEIfUjVls8PetXzJZJ1uBoAO1XhD/RhKIL1/OsLU7C+g7NveYFk95VMDbL0DPGAT8z7NTqeacil719iKpKlgMbuSmSVHevQTVASHQiK/HnwCJ7Eg4yZuJsQHBhFm3ftsExifbEGTcghNXfhG0cuOZ2lrPuMaCiX3FAdJ3OQVhdrqRZ3lHjpUQccMzNcU7/lvsmudFi+i6XDgqKvUf2gazVDdK+XTmUESBC3MYeCEYMZEtWybmiT9E8Fr04CSOpVdhCLmpAGNgKjertXKAz+ikqgIH0AoIuYwSD54eFnD3LxRTzjqgFTgclgKuc7MLI7fiIXMLG+9GdTi9NzaQSHy/w3XQvdcl0MCpIGVfcKErp+BHeFYWxGdJOoewV2b5xQYNf85yCsbCTGdfsUmsH8Mudp4NvZT7bVm5AmmopG02G3k3oxeZ0edQAWPHaH9ofG0idQanUQgszASwayGSMLh5Q6fme3PLGdzijnb/9/aZL9+936XvCBzua595E8QERccZUrphJ0tK5bwlgo437w40SExWojOamPqBKgBOkqV2yrEaG7Q==';const _IH='7ae47f7d0237be259677db18d30940075b257e3d1cd13510cd47bde5d9293d65';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
