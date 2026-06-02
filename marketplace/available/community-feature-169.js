// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DpWJB2bHnBZDrjLck9wg0gbxMy9q7S7IvJ1E3D3/LS/W35dRcMI5koN8dkdVECAeIG0IDsYBG1DQKMM9A/AL/Jdn3gqhI0CDsVKirUK1lhyMfPsc31x/qxTsumlpvgfyoKu8u0CsTilzs882+gjsrxcxkvl60JnCIAAq6jPwZOIqD8aJtvA/UtG2n8KzU8uNWe9LTRM9E8CQbQ+xTng9NmL9maBJ5ArdiaPa21NB11Hrcf6nfryZlNZaptOVCbkcIvTr8YzsggceYKPDffYjG8AMNGf9BpQ+zgLkuJgdRaZCx8YJiE07HV9lxbmd119qoqimwnwriLEWZTCMiD//ANGk3KfSJA8yRxg0fJA5dikcgs3uh+HWuRKAKYvwCiKljNAS3hoWwXlejNj+SG5HJfMX97h0bWVTIutS7NEhVYaZlXCNDw/kknMgbKhEtgEn+VM58PGWuWNDpOxWlCNYleEO0+H/jO6ON4cI7igLpHFtrhqZfCiMFJzSDCxI8pViy3Z/e1a2k1OKSLm+T1O6e5XoUdIiQJYIIFrraZzoFMZUTtEGTz2ak9BFwtY/HbpP2cHE4PwvcFMP0tXXrkbNdXQxQ/c7iNzoPjaX4yXwrtfogh08bg6RFfcII/xdLQh3W05WfWX0Nu4dlYagm4dUhGrojKhsxuGf4WoQH9brmVef5wlhxuAXJ/exfWsxxUvaiFahgbCPr8S6QRHx3L+Xn98PK+ujaz+Gs/8XLqqY+beqEAeOjlo=';const _IH='afef35c26c9266d4ebde60d8be2b02a46c167b685eb0be74d7a90c9351b616f1';let _src;

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
