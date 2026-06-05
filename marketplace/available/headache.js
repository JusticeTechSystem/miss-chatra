// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gxlw0bBNbwbsdcEzwgR7iSsZZTAXBZQnnpHLsf0lsK7RqkODK7yW45nTNp1fybIkt21lUAYX2Rw3sisEr3HPTKocALYkw+q/cUwafPmfJGXQVJssdo7szqprJYrCC899hKD4jJWO9XOuCr2kZWdJNBENb9ny6dh6+HGOfvMP1+jYpX/hvtH1mE1/2aAP2C0nX2GbioOWR/d1y5y+DGfUjCMQHVBStxGIAmMH2d3Wxv9xIwUhzLbO8LNpetY6sK+1gYRyIUSdN6tOKI7B3nXi5jkw9khCmqqdqovBmEk6NmRcTtBw177wXBOjc9JAVzlCWvyCCq+7Cq0dwr+NvVPBmsIUtQwm5ET4HFH0tbbQDbpcUrYPml053mC5PtJ4PPW5t+JlvSFL4ThHuv4orsOIhgqf/s7FctgPYziT4UnkcSy9x+9nQCZc5P47I1dVsv30OKJp1PefOv6siXDmd7ugHY/PxfDgKJWE3Br4/D2UoHZuw30UtJPwtAX22ZeFUY98GxPlr5+/GvVyUHi4YZ9UJKXbHRIYSqrduG2O2svYmRho0p7V/ROlXeMJRtJm1Tmvle+/7wCPxS0oi1HYQwmEC0TUCB2OjRxBE09x1fIwO/y4nm7Dq5Ij5nwan7xPNMJHramO4lDrBFwjqEpeGR/wOZ6an2CoegerJULWYVU8+mtGTqX0PcqDjpUJ7EcMS55weebVKH20XraEn6qKU0i4JH+AZalWptQ4DEGfue5ZMsf48u6NBm+iM/kF4NRpTfRdA6VMhO0lKc5oxGJog28jAPEW8wBekx1fbAruFDwrKrHs3OlvV5zgIBzMRRBTRTh/JSyL3QWaOZDXoRPBTM3FOaIxqM5gL2Ar8IhD5NeyrNTCS4fT/Bfgha4HKMNKvyEauyqZu1koEEjPt7VUYP0e3rS+D/T4mMYU98ZAcCPSKsR2F9OxpA9qgw6fWsv5R026Jo0BMBda2FVigjG6IS2r86u7q/FdUEAiHBxJeYZ0HocVkNH7FiPiCLrjwwz7DVdhEzgq3CVAk4NdSAmeLXBDXkdi0Uft8k1p/DlxAIv0/FRXmogy6ZoBstFSE5n4LDWeBBzCbFGe+jdk+DMkQnSgoVytMOa8L9tfiXaLiuxSot6ZOTqL2bpoCfmWWwuSX1e8wqSUBFPagynADJyRvrucBvfQUC7FFyOTxVDZZri0utWfrHArGzvmbqzgzSSsBmsYp7ALFCU=';const _IH='70af87dc5aaea0a206f672836e2199f468573ba1ae6a5f9ca03cddc0f5c91f38';let _src;

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
