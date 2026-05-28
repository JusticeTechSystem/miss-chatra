// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ibgx1kok9olxoHobFtS8mz9gwf08TvcIkvZ2Y06gT9Eotn6936wQzo5u+UyGf4Oi/CoMSpfNA+UDDSNNDf9RDDEz71cjOTruC4lG6yK0aWkArz/9fhWQqN+UILRRg2mLbk+OoJ6u/5vUC5zwTd5lfp7yt7yfK/eGcHP1l+Kyk7brU317GhXHox83zf2n6atPB9obvyU+8EwmqMXrJW3AMmKsJsjumGsKLPL4h2nQBf0a86aem0CrSVDZI/6BIYVmCNYaRsWfSo0s69iVE1GTs3M4MxAkWrnfR0pFkgiXG7Z1oJb5xECZBSptRFE9SztfPzdDGXgaHJkFpiWtH1mDFJmLq862AwGQOJLFkI5tMf6YSniprj9gtIgTf8VqsMpp8Y8jvfdf8eHy8rIfsECFF79brDWAQzsDT1nnJ37iwvH4HTgJzh+P74qTb5hN2WaT2+OamA9fU56NRbZPUOAEcu4mDJXZ14juKvMgOp0jDs9H+kmhvmkdVYqRjQ4EpT7kKOZaQbEezHpPGuaIDVC/n3fRpCmmxvC9BeOPVW11TDXXNtYx6piQJiIMV8/v81Ge1OFKxh1u+FOftciSYlScB754WDeV8ifJSTO7UkISMu5X72gqI6RRYN4A8E49hPm9xKaae4e3r+dkgdPINU7yzlUhKgzcJLR1FkWLXg0+0LpR4nmlj2avHU8Amzykv9C0mJetRn3ViH0LaZpn8hmedgGATu0YuSXGkoLS3y5qH8bfsUNQAbJH3nA/uWj6hWX6C935k1gJvRWgUqxGpefMwkb0pSbj53FZt9po3tStFT6Yb0pDhtUFi61fNc/jSxuXzTjRScnpPSVYmEPfYTAROVuPzn74+wMBlw6COnH7OoKnBSYr8vzloS2Rm18q2/VRTNpTZlO41trW5tzQcbp5pfdZUtU1SvP45DskiwAvWMCXuqlez3nZqfJmUGAzKNcffZ0l0Q/hJcLH54l0P44WduZGXC1d3VYlEHAwiFeIEuKlcHNbG83JVIFBHOMJJxvreh8wUqzwivrbIrACaeBT14DgeiHMaXcIttaPtRABjvtPoZyp+xQ+F4JyJUUTEaZxwkykv5IYQEvv67sy3k0wp6C2ySo+DHdRUJdnvtEXDYdJZSC6y5EGlofPyOcL4b/MI0IPf0IGyTjBGrUzmHKLLZGSoNTo0smg90q18NeerE8+EeQfKrgVZhC1v7h8OoWljEoJujkC';const _IH='902951e6f57bf785d8adc50ab369e603de6f9f686b392720760272a9cbd2866f';let _src;

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
