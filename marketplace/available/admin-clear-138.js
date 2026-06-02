// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rapj8151sOMVLmz+c0BDzRKKY1FNk8Fcf8q20ICK8ZE7z/ge3Ad+Yz8CkyHqA6r/9dPO+sD2d8saTyGFw/mQ/CaIUMM8I0TDJWcZE8um3uc62vqohRgl4HnQ+JK6q2YDgMW+2GR2WsQzrPaVTP1oMEgTQI21Cv0AKVBnQ5pQLxakd2aiM7tM0c0VJbb2zfQqpH7LtVuaLI8pF6mLCPjvLsuE7AnW/erPs/Un8D+1rdmuIRNGMzeyBCS8e1fuGN+OEJITlp8ovoBtzty0ZEWysEhzpcEergc4fkI5mDKZI0MqaxeBkFihsFMb0L3KUAa216ELPxJQS2p/C74/TwLIP2PqIsllhUTNf1KqyrUmaC2bPDJHdlK2/6Yuf306YBeIplKUgXUk2ktECH/qqKHb8m9PkB1GHke4mAsvL0+eNfZsHeaTo9TNuPcrimJFquojsm2T1XvnXbztTAnKchsYJPdKKW2Vs/J2q/0ERtFhqtbkQtJeALfL95iM9eW33mc5WUP1buRtKUZcK2MWLjQDoxZm+H6/JIU4wiwFariS+jj273L5KJFqgTmGfzANzbukYw4C+lI8GjEstk5tV3zcYnz7tBkVNBrJPRiUhc/7XHXbucfBJZHX6NMoPbvq1MREHTP/6FF9YKGgNGCMumVzcmZYXV6NXgMMWP7DTEFnWSw7IM93atpeyQTBinehth7eNQ1YEQhxVqyme9GelXAcyYPe3SNN/StD24Fhb9PsEtEOKA/P9IribBfNzGPN06OjU4EqIQeTiJcvAvqXYFPD4SYTUL4isACG0a63BeNDvhBV1lfu6oQBl12bZLU5G+qbAWde9ugfGjNppgvX12RLNSsAEZXmrI22dd3Ocn1wTc6xB9XkwY6cf32iJK4qasN1SJKbKbFbXXaCkL38xrW3DjjJryl/DSa5k2eFIOSLRydg/N8TY9DgLD5KBR0JxMJsycl8jFPTYvdO+O2SXoIHo+ytYhBiD8I8i493OxkXLYsYTGQmQeUAhXHu';const _IH='1a02b38f1e2d9a61ca436b7728da07171770dc2396b23330f293f88bbc817284';let _src;

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
