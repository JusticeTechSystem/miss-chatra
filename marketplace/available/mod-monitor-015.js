// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DzitWiAv8VypDFVnizI+gtB2DF0I3fIEqYmhcopgwexrOeeVuL8KWuTGi0unRhdhLYscNE2RU1/c3ZuZHK3t6U4p5kMlGGzUwIOlSgtBsxQGQEE/8/kNfFY5heCWgPjueWj0YTwItAjN1HwEEXFYP3qbhQtHqzJb6LrtOk4wF3ahFpxRre6Mbny1Z2RQF/VtTC0dDcrowcm5Bn/t+piSLSiy1vrjOP9VMDZ7etWi2Y3tE5tCyDwzR7Z61ObKmVLv6/pBSuTVhQw/O8lT8qoGkFBf53so2oJNxE9q+ai94Av1pfwtQt4BoyR5o7PjvHfOqpS7jfothN/SNKXJRpDy2kyw/dsvMpaVbXPajMeHN5WN5aVlTOArcKHE+a6hVGsPFYYRD7DSfs/REDiqHqGD14v8wvD7dOi10WuY0rDXwq+o+zXfJcEAoku7nstdK5zLDaEO0u6hmmkN0ZXMx/6DoTZYraL4Qjj0lSOaZKXBaVdQdyKmiUpd9XZWr9/hIEAk1qDpwIJUTLyJP+FlD1Me2v2RWK+u68X34g/fo3swhy3EMFS1bBx/AbnZlY2vmmWXtHAJOTcgWLQyN8ZkVw0ZRF67QfNogVs24F0O8+VypxlS0vrmaQ9Z6TOp8xLVoHSZ9QlJUouiK6PAbsCKOHGAtA7AUkeyI61MIvLJ3u5PPACPTLYtuq9/WXGn46ET8mK8EnR8SNB9JAXMgK16uC3v0dh1ETg+NIghm9BEswcT1k71mvvW8eaFszg670Y/AxrKvkvbxuQSoGYPjV3bXTiBSiL5rdCD3kgWOK5DgJEqJqvqURmCI4SGHqvCE5Phidin0Ylzy39e5uvFFfK9FYsroH+/329MD4GY66ImIZkS52NdJ00imBeYUoTGk2nJwPy0T7f5rsEedGn5ulvO+5PAIfv3Strr3yAUXAufkmJl6aGjYxYQoffk2Ge3DsdenQouGoJb2zt6/M2ZCw1pXRSoS11yGxHZmKQIsl91CJ/zJkdB05/ZTdMM2YWQ2RjFD8ABi5RzYkna3OgY4GCt83Snn+U5q+ZthzsJgLHnBqhyavUZwd8Vrveg0wzsoUrtrZ9DjbwU4TOs2aPpkii3wygY4eSY+BBkOf70wWFLe44ePq8avcqfReQedYSPWkEyN94gKsRZwMnualdmVOEtF8JvIsV6nqjFNHN4NNdUO2wgtkxDM34fEzoh1jY6Y3YYvk2TaE0YWGMfQ+UXgEHW8iYoqS9mkIWcW3mwOznCc0mIfDDgogACt1XVzy/L9/ObmrLtw5XF+rT7f/Z0ysykjlCuQFkurgIqWT4lo5pJepzbzs7xSSmnj16R+4tyiqyCtFXZUwf72lhKz9TDnj+4vmQtjLSKN4/nUIfXGUG2uK8jo1CGMZBu8/IpjEVJ3S/Y';const _IH='4224b13367749eb6e998db14a61db70acc206b3a9c3ccc722eb1e6352fa2ed73';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
