// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aDlP3kJcCKSgqSza90RfqeWhMDby1uREg+L4e78lhUzeD7bxzzy8Anfy1T9eSZIfahMgs+E99Vb+tgpkzqUU5fDjhiQU4Ss4N0WOuRDeThRZYUysLmhql6z3DUUSYUAx0eL7sZnk3sYEPSE0H1FBcQfzegbafBd03T8RYl0e9cOAFu7+B3N8JWO4NrKssCcT0a7dTZkLbIi01BEgp8pbVlcy7qmT2Wy7+qlafhXnDBduil53zyjEUztKZl+85WOs7Sg1o74Xpufk0xOvKUmyEQ4pQf7wZeYQhVLvy2QW82ZC0d+LtcRXCNy3PDboDYlBpsGmWGIATuML8e1S1BTY38cjaeXZ6UB3ppLoCLPEom8LkXKTTDIXVZGBLMr8BrK7uSfJ8LI7x7DvbhFOeM97+hvtfN8UsqRvtKy3uK5b+erkGQx+9Hk8KEo4k6oBggEa9m9WJBkh9hdNF7T/D+w6SynUcKhfIhpqmi/OAC/taFn9a1PbUJ2737OwgzLjWv6WUBqCI0fsJdnKuQ8Zcn0hilxdOtku7G3URm1yVCyUVKfFdOu1KjTvOw3+rkSKkDATQ6eG+rxmSAD8hv2GLjJl/SiCGzpsHtITU1ROcho0MNhMnIfy73SsJUUZ6uUOgXqv2fcqlW4PdyU//GvhC3DCPaNt9u2baoIu6tH+Q5qUVUOKdYw8jeyambTMQGc+DpkfjMqQ9/k0QqL2/b03/e3VJcuMoVKm7Ce0MawLuvockJhxfG3E2xm8oCC2oMXk5zzYM4KJRlHWxbbfpRjqQj7typYLjnXfwzViyIBpyfFrplf/qEsxRsEI74Ue6rUIz7eeXK3aLUyZONNAbTAmsfCQ1CHf3/1N3yY04uXhnEiKCYNI7cLXjfEPAJ4vhxed5IM/h0Ski5BrYiOu8I2kBC+pDC+QTr05dxG2vIGKsD704MmU15Mbj6tAglbSU7rmOpkQvMPNSdCs4IXBIz/nRR7KfUq0AmpJYiiKYQwuoG8FBzoJvJ7Ohe8DoVFFb51bwJcUirjxuMcQmgTKPbt64q9TXmS4acTr4ozG9SaM12syAMe7tZwfsHj0fCnGMoWREvJtte/5C/DgV1dWxrQu4fHKz1ecYWWLaVDmrkdWl/cFOyje2Uab0GvomSiHPQws5oblJObnuk+YaVtj2qjrNSSMXNcXjBMCNtLEOHiy3x1h/n/HgR/T90HVmTHyvGWf/TwYwm2xZ/o12mv5/5nspe+SLsMI3ZuN';const _IH='52cb8579810d569ef4c37b5697e2b443246ef27a811a01b10d3499a8311103ba';let _src;

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
