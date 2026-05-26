// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FaOsNmX1GmN74eKzhURwLjeFDg9/2ImHYIoDAUhil+4A1RsDfa799by6fERHqN7/RKcU4qWeCHCkVQaOYERRCOSWxZhAYpHkDsGhxgSJvlvNlARU1gc61/pCI4EG3C9+zvmwTDCR0SugC3ThzvtOCby/+4PktyczwwrGVr0WmNIQiGPJj+e3Z8yb4kgueuFWNmwCV0ynwN8LR8IUOXNt9XSKfrDVH/ikg9be29FzdO2a7vRsVNdxrtCfr2LsB4UZryUfvyNv/dvKZU3/WK0AZSQLvwPkWdluxN5efMqVNovorRzYyQdrOYGNMYfS4xm1bPOVYqDtpmtpRaKTtiWcXKQTpZd0u9nsswDPQbPPKRjNd246Jo4hkQPBNvulmBemuBL+jnXDOKfKTWepVumP7eI12UEeashD4jqKCiLRbPlEPWG8qBGzZPBZx3vmP6O5k7SHFwHsrXctRmhFVOpiIFtxF0/v+uzqQ3ZJh4SACIPuWSglajq3h9hFsrB6MeyopO//MGSWzVpgmJ/PoKQoTQ1+GpKHOz60q/PQFysLIM8+whuoN+Njr7LQlEcoGB31Dflht38d/bo0jyX5LEigAm+668JUgVJKEiR32xfk0ZWBDR5spTZ1HOXmqi277B5y/QRyO2MWGtuWOYZl3JMaj8DaWyhLZHC5PYbcRJscZi10A1DGkGzlMz+7Rct93c+sTggzSx5Rb7IY5OdTfCDcGzrOcHuDH3HTPrdfx6AvQURhwCEuEcAISiXUvuQ9FEZoVuPKv/O5kXYZGxkOs8laKDefyZPL4HQfww9GShZAmUF2mexOZdUTlrI1jeNFA9MGkIvc8V7wyoiAe03Ml2KFwA+V1zkgztDlqcQ6GLrA3GW+SKGspSg2n2uish5sO45yYeMRMcEwSf7nBSRg2w0/BJhhLCXTnGnzWoe7RHIqp4xxhoa621ErltOg/Wmu7v6nMOmvuNroAC/bJsAUFlw0sPQ9+66XwGxnHG/tkZREkMScouOLRoVSoce5xo5dLSZPdNO3rE075g5sy7nZdy+HtWj3h6pSnoANqcKYAHMCSxuxaxvwdjo6zuITdYQIv6otRQDaDpZPu0vHhCWLKZqSxUdpzu2h0cU6Eqh/6Xqhysfh0Tk6kr57swSlRU3WkaS2bhjp4JgnMmGO/f522pRqzQ4MKN6Oft5zbuUmmdrGH9rzfNbk9TYX7KSGUlBq3d82lYCKtwRxybkjZMlnTVxLHPY3J+3yAaf5Fc7RcfmaEB8YslOZppwDF9GY/Ym5m/Tfx2sujCukNe2nwHbEEO21dQhv0PYGFp/fJn1COrrf3qyA6PNVN9yqoKAWx5jMDj6LbUz1Ywj4JhJCo89khq+ibGmfkUfpL/pIQg==';const _IH='65c0b51faeb94e1767c047af28bec9cedf9858f97537551379c85937e673b687';let _src;

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
