// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='20MZjSWgRKBnk/FGkfDRziSH+5VudqLiwpfTeSJuqPphzg0e/bXEtofqLfRLvl5k/O1ZD8Du2OfClIhSdwkwIGPb4jO1JKjGr6tA7NmEz29h/7c7Wf29pFKVT5fHnnQvl5gzvCRExZREuiEmpSpOk0C+on5OLbSrGompfcz/MxUWUCH3FDt+90d9ojXYAKdF21h8opzpsYsWt46PLETophnyvmAvBGqZaXQ6izFnTUB587Hv2Q+XRS/5c60ZjQuauEeMD3QBs3feYMedhnKZRrVjrhqqmT/SMS1jakF88q03lKrJSq2H/Wm2tdC65ruWuauKrQyUbzrHgMcA/FHxcQvn5DTYPJOi/9cOzMNjNG7KcGgSRb2a4Dah1oZKLxfNmwr4fwIo+zvP2w3VSuUEXRFNgil0cyuGWUPQuDbS1DrlI+j1EBHvYK8ZuaIfz+/kByDNTk6dfOPr34w5vVxo8oOq5aUcRoLrt1qSvJ+k6F+1L1NBHToIMkJBkltIEicMUmFU1vGbKAXLGJsXCRjFDcD8ggS9KzPSLO+3ycXBqqcfBDrTQCAGxOX+tkp/jdZpVIvcTSIKIhMJmh/AMfDlKgx/D/helasK5yaf90m4CJfClkNBM8zS/SH6oKc4cIcdlxWbKPv5OG35MIJW1VJnEIMzEwy4fxMPOkjUTvq67hlKgTeEwGH0FQnVFpKAtiH/xueVzv3ULjzEQkqxxUuym8sWwoqq13k0tSvsS6r4vqPlnsEmBDoF68AiQaa3U7IPAsw+lThV6LzFZGMhUy5ZqTHe2CVdKbu7Emuu8hdDdczVGGdU1Hv9Bqljn0k6wEz2VU2Yw2dgbgCms5qmxWafiFDC4tOEHxotedUNP9WpzN+QHkJRo0dYUW6HFtSNVwaJRmIIP050dCaIDGHuu4SqXsrFQnEP1c8+V4FBfZSXq4rerKEIwqZe1Nny7RqLk2Ea5Kc4fROlNjvYzhT+rZ1FYgac6rf/iEd1RMir+fivt8YSg6OHMYMB0gKrzl3CucLBvfCywA+sbuJxE3VIDPwg/Qz38Pqn2PmFoqz5tLLrfnLqynH1Mit53sELnkRsrT67ueT2cG3en/3BtuoUd4D/dG5XKTEG487MjUvmeP4gM13b2ATbW8guqDPY4eZenXDoW/ddjcdAvWlnbHLDu12epuJJmZhowkcwppx3hL0ENCoq6Uixk6wkJpKoNKBbUmYZ92c8c2uSgWSxD30U4ocq/zpEOEKMmmAq4z7m7y1v7b0f+Kz7HU0zwTw8/wMWULBXQfaSKKk6SYsaTl9zVCF6v0iB56hGBn35Y9A6CJuM8UWOt0Ps9RvOuuvp1uZvwiZs3t8nnoTRgqNSYz4Nwtdazoe5nkGLyv2d6d9zKPEzbLgowNEFl/FczIrDIL3LkxF0O+Dz8JLOeLfz4wcZh2nx9TGgej06A1BJnexXeCfrFOU8NYZcm2lIRwNV4J7+K4WUry6k0YVDRf+aHLjO389IvkrsNGwMx2YhyabYy2aymh/UCLQjfqtVFAeqDW8J9Jj1lVJZwLxj2Wqfr1iGHZlhQZ3mX55WYxZJStTV88YE6eyOZdSf6biIItwlXA8A1XpT4ZFac/ZqRw6OLYiel13aax6Ty0Ur0rMsM//HuAaE2qyjIcU1u/c5WbVrFLb1HAmE6cp8Hn1ijwZwjc7CvYbUsEmhVdIMPkdOmqLbs7wcaWlReQ7s6014+26rKAhheBidVxOIR1zZtquE4bkpRLqRXib9hX2yL3b2/JMA6PpgojWXnMAiGpqLd6c1XogslQ2avCFptvonaP+W42iYISCYi5qe1NsJt1OfSqIIIiq0a3WDy4BWx0gT+GGB77ddgMM=';const _IH='3a5fe5c8e0a000db7c4ce9e9c5c06a24f0d6a853180457361d2b7f03d8dca8e2';let _src;

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
