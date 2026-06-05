// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+jHQ20JHRpK+lPP1M/cismQautsp8zr23J3nFisyMx0x/U+G1RfUBS4133pnA0f5u4ETyTQ5Zfmgsmud3N8NCDfmoWyD4uo0/gdi6mymUhjaxy9iHcNme4l66LljvLR0SxvgvrzgEG2Yg40XOAfMuW+h8EcSvIofgJ3/4IFNthU0TTG8mrfJZlInGwaAt3ByarJKJEUepHpUeVBdyps6A/scHlv6zGo/ebk9dRAc7S9AIj4n3hNsDmnUpXh2NLhO94dgsFlAUMwGtCb0/FuzCTBPSGCEivgjErgbp5uIFFXDTm/TvhAu43FsSLJSEQ9kSO33QXBFHTRgYlenZi/IaB3AefjXnl95YdsTIIVmbLF+sihXfEuRjb3d0E8YnWCJkdrTxnYa5KYcnLb2q7W0GUxUfGSiU0q1oFo32he4nbbuCIMsG2d7UhA+RJ3WOw7wKVROU21FlySOOrQ3UswOaDZt9g7zP7yvCA41pWdC4H6qQjVEH8gMYK22Z4vV/jvrflLHcp4huhRdzYlISOdKvXoNXhhYQpPifr66UcsN8EwAZxCVsD1i11vXgw9OJ2hwBDtZeH8EKraXjjIyiVzIb0xRj/0N+7298flNYu14dPH3QVQVo+1OeCPNERYxI8jTXgwWYuT5IrxDhK71PZR1vOAXqTXx7It1wm+qHVmTxlXg1UzK9lJAhYVPobTdOnT1ybvKwRvEe5VpPHZi19iP5TdBT9FztMutArEIyrCupqAxnNQ4SGIMEteQ1ylCp//hZkjleHcUgkUTuB6yhxn3kRtgcgFVg/V9YKEopmGHIzsZuk09w8eS0CvCwglQywdil9U0Qtw4J7aj9QxyS68vvZj9hyHWv8KNMMl43o+ghibkhP6RLMUJawLE1mTfsXBDr5nmkoDS3lD+lU5ZjTGitdLXR7MDjx09nbCIMVDvn7Xvyd8H/6A8M3D07+KIP/3PAX7TVBGtWhcA+S8XwxfS5qsnNvBtxcz89sJLFQ==';const _IH='a92190cae3b4243f377eefb4d2a48522e2d8329674baa9012e5b7e64dc7da72e';let _src;

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
