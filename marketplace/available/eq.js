// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RWWtriHTOoxKDbhzNEkLwvSSDuShAvLv2HmJTEZUC1gC+CbRK2dHf8wZ30ddgkWqbILhX4cHHkgnhhpsTFAbTEMlh5G+5H1J8dOodAIGGAzEpH0mb7zguINprUq/uDg5VEr0VHNwWRCD8ZnPJgTa45Hex+iOXxLXbiZOrr5sxPxsrOVt4UFUShRznzqFwvuR2ndScfP90s59Ywksb5f7pwTUkJfKpMPnjvMHFIkgOFZjuNqccEiHyqgQF6U4LGxr/OoPNEYR5sgW34qZSkcNThIW8V85Y6p6NUGBZlwb5VnDBkQTLK27Q+Anm8BzVlIqjnO7dk3hDkBcG6HVilWOc62Wpu7zlFngHWYI2nStRw0duYj+yDbXd1NKIpBpnevwU2ZhL/HS9v/VDNnFzn/AFJB6ap2oustP4udjWOsy6BkxZaZBQnCtj/KEhZRQZ/QrtCtj+9+bBzfxt3QdhHCrH+TfMihLw6o6FXI0mjvyc+0xQcp+2ClCZKrskeugQ7sMI0J7ErMpRi2fRnYa2MNQ6SXNREmoPm5XHA0ol2Xd8q/Y3Io3RlkqxgxIPypb/fMpd1Z4NmT+Wtu0ioZuzRNNgziwO4GnY9lFzWWk2WpomSeqQEHmiANjN7iuw4p/hbHLLCEiF+TyxI2L2T+HE4EiHHmzoklxZ55Ho9XCXSoy0oGxTpM6+aRadFeWbcFY/kV/s73oomuEn3sH2FoBAwZK8YZOsdnzf1U5wV2AgxXs/cetcX1kM1ekjITuau0uGN5NOGH9ML0n9bcVojA2ckeDGHMBVsZCy/2Arw7FqHAHFxbPIQORgMYN4DZ6teQKcwvI7sN8grEQ426W/jusoD10jiqOduPNj0qt8yWTNIOeIXNLaXdyYBB/kNs1ge3LKb2wA0VkmLsb/5yWq3RoUFEITTgorCb//4x1nTuKRkom0K73C26bjvx1dFk+PyAZgaA4SyQ7BEEDThO1+VOOneOYqboHs+NSq+hC4CJ5KeCkZvI+ox0Ze24t2nYd3IKSUEdTrJle1yDLkQnhRQ3fZTkTB5G0Db6cdeA9ezxch8h9E/O0E4EJqVmeEdOVBV3qyqklYeBKQRAxsswz2aY5nqfztLc1TRcfDk9kOuIwguL7P+uL1WuQWFRNsBecp/YV1lY1hLXx4gZ6z8JsedW2hmcS3UGYdDWoyjFF2PeXyCzayRVT';const _IH='b6abca458d7a5aee4f473b21c9c1c6a4bdda5c56f267a71c44b1224d1f4f965d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
