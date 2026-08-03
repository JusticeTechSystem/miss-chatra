// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJgTueVoHOcRCLHom4ANoAaAbqplPM9sImSW70xSN4+MWxz4y/i/X03qqCQPkEP0GGLwIVQnQ3obo9K9nZC2958y429MxzC0VKAgXV6n8CGrF4udrjhNWuwJFVUQDyaEmevtgHbDwiyDll5gQAOowuzbpEXsFLwCGUWd/UIS7rW4j0uSGdQ5G5bRGE5DjKhdXrpSWRDmNNYlHM8i4kwovzKCtUn/jhwzL8onWbDwf5Zjhe0O0XAn9WjZwQ5dG7UTP4dgTV0aASzQ5LP/vtYBt1RAsEa2RlId1OIXWqyvSmWwUHxnxbeHeKv/gLgoE67l8zMvSc1b60RReogPnDWMOrctpfVKzVV1s5xVP3HauDYzrsUMZ2TVPnPPABIMMwCMuPOTFEH0r+15uM9qFTWvZOl5V78sMxY9ZTnVEbWF8+Vh95gIo46MmHwvm5KmXF8Ial1HPxNxwmgy56ECkeYgyYfvgzfKSyvObIBo6dwMjdJEOrVSXFe7wP2MtVGxDE3ZeK373LtYwC/xjJdfjn1zQN5oILof8UFqzxrPBhVQjfeSfxBySb1DGOR70QsCIs/nfbEHUOrmy7qWv3+nl8FvJCxESi3ClyErTroq+ZfrKXNWwf1cVNch46AoBrAuLy2OSy2i0YjO25ABxUxpqyYD0H2HEd3CofdbfrXrLwj117alwhpEW9HU37iDDg8vYAfhCgElstFfg6ndFZra/O2VouhF08Y0bCzmYaGXZj+fruvqNhwk4me8EOdzEst3JOAAzCh6yYuIQ8PkLIdftUr+pL5J2ukl4/KcTLpn2ZIbaRFPJ1myz2ZaZgcQWPH93VxBtbdqp6g78CrbPCFI8LTEhhQ9diHsXDZ4w6IGBEvD0fuDpEhbgOsfNEUrAcPzbtYrE0cNc2hNWyocqdP6XrNamBw+/D4kf1pzpSK/wsQndtNg50VA/elcafZ2DeRcxDUBAZ8yJyDN+Xam9tIFpYavZeLSglYi/bHcvaM5cRu93C6V1yhTFiLz/ynAuJqNWfXQJif0F+f3APbpuNrYCotp1DN+p4UMGzXIoMaGRhOKTB5A==';const _IH='0d9a6aa115f266a125ec60f91682e24f7601562e4483d8aea49bc2fd801f0821';let _src;

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
