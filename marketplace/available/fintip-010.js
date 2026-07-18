// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+XWRKVGHJPGupLuxlTq2QGgjm3DRl5JAMzVbLhcurcetWP7+SjBzK1yhK1z0L24SRmtGIEGf7vFbS1Rj7AgtD9WSwxYkErrEo39O0W0WjVmOoAX9YWuVXDVGVMf+g/RrH4p7ju5oZWt37wxMT/ju0VkjwaoDY7cRKQpF59qkXPvKT8BsrFo06EH/a8GO6sTQvaVmj+fT0gz9tpJ5UGv9wdmsSOEbPJfSbM59+HxAAP1oAyA/fR8unTxSLtfMxYLL/7/MOMhLZOXhSNdyW1zrD8VLs2YXZr/JP+AkWY9uPW+YjB3P0NnPVhhBm6cmQA1LM/hVad+9oy/mjrPM8dCnYYHAfA8AOlmD3GQ2YwH6znCtWajMPKDQSlq+pP9Ji/Yzuw83YOo4Nqcs/9mQjW5lRc12VRuew61DMUacrNDs7rcj+bb9MQ5VZQNYwHX8Y0G+a+OQWP4BYRDYcQUmfzSSCFGEnMhLn2NwPEUZ0NqRiOdi6doofr2UYJF/C1yegXfAmmDOizmZOnGnlaDXa6B+oTSWcfGLCMgfT65JiYEwBmCUqAXIMV8HywK/FBygFkg61AmOqn/GaiULisFr2me7fAS0KXE4QTM8ZlDDemqT0rl6/VwEQyuDjtWT3Cf6cSFt6YYpm7nsWThc6ikmZnLk+5yeFfhn7jvjn/9am4U6IxcuyzsXGgt3J7T5ZEbIdqfvaWkHX1PoBRu9t6vImZEiuGUgPpVSQvucLVIO5YdGdTrqvnGmYC5DVo3yb/1iIIrJK7kr2y1ruLBUlZbnzuAa2ECNv/gc0t5ybKdxQ4a++b2axzWazJCv9fwItlPCAbLRk1cvOJvf8cS8t5eDDCmR30DvUwFF8PYiUm0ssMrapL7te1x7ifJyu7DlsNHi+GigIHq2LjTKzXLLJrK4GYl8iS3MSHUwwoZ64MNErQaQihjHgSmmxJ7YKg/Wpg+GYj277qs8CN5q9kHeOAnM3ShohR3wvCkH63KKq1zYkLeBjzWwtn79sQANBfoVDCO2De+0R5QPXGikF0T6np/j1rewsDgRawGVPynbd6QQgJIQ/W20=';const _IH='9faceb25b632d68ab387033e23d4933f2d6a4c59ed26b4f7dce50a76bd92435d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
