// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='plwmC58gBBOQLkqum2Au3X4ey5jdMAwNnz8R09qwU8m54+7bn/9+gjRkmipH/+GQ2DrUpdnhWYGeBKN1O0qC+9PaljvRt23W8XsBmWo70/6JBnr59YXuSR05mcWrT5hNnlMzg9jV1Q71j2J0Lwxi3hYbhLoHLx/5/btCiH0ZteFdSyY4E4ty0fRDajQuhI9ySbJo96LLguRNwaRiP7Bbh8Xd6u7H6/xLM/3zNICvjg1gR3JnKNu/GquWDiqxPGryWKQe8h+xSbZtb73XAgCDRi/WmsGZ4+fimToo31ghqsgyRDdxxNXEP6qhp5J1V5kkCDGuKa+V/aYMDIfOOKNRIRkfygkXM2btLU0BQbo4lIArQI5hLFaSX4JtXF42TZX3GUia9vtoh5ktUyfMzJEawBpfO0tBbbF8WDFPu3+1yey6N3/2GbfbiD5Lg2GFsquIjVo1ZS6R2K96SpKB4gAdWAYc+6x54n7LPfOih/twRqwtOsOk5AGUvTif3plr4GeSGKVaM3b3SaEhVPchi0XuyGJLy8VRxWq+WA+ZamyivOTRcZgB0SzJtYstwyg3G2LN4H7MtfzA3c3OUegVqOxTySAp8Q7zEGr82LplJxf7vC0vXP+rzsyqU53MG0l98cvKHGMvKNCfJmEpvY/QhSBlVmKENK66wkGDUBNOdGCSc/05Gd9yYz1jjKFim1ZebxQF7JUV8q7D1G8YrN9UriJNzLdGEtb/LK3Drj1cBHSVrzanAu1SceyF044RnZ0Y4Zh0UKg55IDMYrUwuP5/1K7SXwMs3QNoWmEeKxHsyyXku0XDQsTJmBnUr0iLxy66hTUMW3hAlbK57WXPx4iWzOmuGIQJju1Z7gRocI2YhSLfvEWdTxgrnXvvIfQZkLdieLynd0pWG9iXSLJMX2aXlXhjf/gzw8PuKRRlG57Il+P+JIaJVPIgK7J4ZE9xzPoLY5VaZvcEW40P1n7oILAWgt3MSTYEZGGFztQGa2CBdDVEsoHZNmL4N2SjYL1vuqaSraNfASVrs20PK+DaJvBlc2uStsI/rjEE2tuBMID6GqHGc2OrWfBVeJ61jCXoHhCojmL0giZY0jTadn1dvdI7bvtNP0VfXGX5Um4AgIHlx3/ByXltR/LyvJtsimNNaH1kyoi1P9iPRfyalJG/hItRmt6qyZ6/B+Oc5R6/FOd19jrX1n7ZMJXfPLiNtCNtytikmYcrYtscyumirawUOzHh85Cmk22izerVJ8SJPY/7tRgsmq+SXW354Jq+h602aM4YhSFyMz7mLYh6t5B/CGCbQ2xLuoMQ5lOlnCUUt6b6RgkC2qfm+XIxplw796mlKEkXruZpg65Ku9iXwDZB0wfOzY4fimwDggrt3Hlk+DmNtnOA';const _IH='8b0652ec1f79a1678c1ec228447bbe891737ba2925697451276ce9511493203d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
