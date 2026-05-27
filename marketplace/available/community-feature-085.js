// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6x19RvAnYmapCJ2BcRakdKH6W/IxaJtcPR1dwUDYE80xIihWl+mmONpscDuEeWyYyWJQA6fFDwn9oCyRG0nisLURU4oC4Z3TZhlzL/tgYB/3yG+uFZ2kyMviVaG+F6a7mMGXZ8+5tL5yu+HddwS+mJrZJEgP3P+7zuX2y0x87QQkhm2s4FqUsxfIiItuxCVI5oZXsSXTXpazXinW4Tv6e9utzzWjC+7RzcPvptHhloobffxIkIotllG/avGc56xscW0Bou6zVmM+cVEy7Ma/TNcwz/bjSRiW4UTGMM4LFS+vNwOYniI4KGlikNg3OOJ+zLgJNzDGBJ0U/ciMWF4jtHzLVg4bjPJ0rHLCerQQW8UEkpnp15EN5o59L1F6mxLzA2LSr9ZBqfkhiAMuY+0NgM+RI69cBjs0CUvw+lEORI1prkav2o8rftxlc0tdvFJFzZwDZq2a1AaizdqIc8vzAWvSJAaUw/UgHIXvgk5+wAuDuiSpuwmWojJIGkfXrfC+7RqIRryUdFiYn85NHkwKShvZEGHK8WmcwDxsPcddLZntKdvU9eypLz/iq0Ia+FFiSybqKB3ReLhpeShCUU8ehi03kfzD+4Ah4Fk21Qt6vFcKQPqU7OsKYw3nFqOeaad9NH6iGcZ3reUK1NGpDkHZr/LSYJaxNe4FNOychApYjmS5ACyheAVpstdtUhqwGAPkh8sLKfOQUo48r0Rh22qOnqXbZ/Mw4rdz00slCxnD8UuHHH+MLzM=';const _IH='00a15c8d077bdc17b4be7ede50abd87584b49ce4e763a0aee423f6c4fc0eb984';let _src;

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
