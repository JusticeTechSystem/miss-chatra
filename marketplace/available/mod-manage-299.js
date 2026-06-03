// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='71YfNVTGh5/5CjKtLCweGbQk/bzl25OpMzE1iqidWMOcvAuulhzHS7b91cjUALne2IPUFOMJzrMM5Vh0h7NVUw+F1Jzpk24Mo9TPjLcDVNh42984kl5M5/xabOxUV1BL+aJEqJ8am5wnEllmb+ETeNy8Ffm/I2FWxmVSKeBJntsnVzc1Elc12mUKy4McBIXb+WIEbv4aP6UTZbaSTRsG8g23AV13jcOpPvPMzcFm5pfbU3HIdH6HVE9w0/xRJrsATv2euRX1AqIPguO1UqwusH1EsEn9P2n3jEr+QU/s0iQMG5WJ94J3AfzTYFhFuLKNYbsWGR6/AFYwmiT9VVbOe0NGq884XwS+T+NUwAyfAWIzvHQMg6DHbya+g4rXOPUWNlvrZTYGQ5DsvjDWZK8ehDZ3YNRFeXt/5yvJliqsz9ixPleaQItefejG9LfuUc+otHBwyDaqx2yHqv+RsZSujqKEx5WpgM8YY3Y0A4jvUMDxKo+kKRS3cLFM9c2e1os2ikNDZwMK5FwU42BVw537S8DFq+B0vr6KkuUA0moFZdM1UWBpp3iaSESfIdaYlIgqEtNyymi2YlIFCira8llsNCyOy6KCdBUPqNAJr/oy3gCKx9zD5gaQSswW1/ZTnj9VGReHIH47MSI3Y3MkzLrU34EpOMGW/RNpGJdjQUjhP9fSdiR3KP8rnHCMa6mVK262l1liTbRj2CCaxEC/92YRxbUAv5e2RSzTmDBTHYjKgW4SQiMCRs4wZXGfh40VgDEpjFsYeJ2VYFFsd22D3KA/iPm7UWTJdI15Y0EPGTP6ox7AIsuL9ysu4SirUufyqVNCuPSscwnC18RJnnTsfDMWbH0rQabTvAFV6okB061U7E7voAJa085CJclC/5rrJTB5w3lqGVokBRxifJxDxlbLiXHeY0UxsXl+Idp0pYMKIPwMuge9zANMSsT+3ZfjqBwQDiNwmG1YslPaz2E4EIJmCDLr2jrxxKqwY/ru9weZkw6aXfrWQW9MTARHOfv0U5+yKQogOXBuLYnVYzeWX2OGsLGLk99fg0ZdOTFG3Mdy/JJVtL8xuZuoESiFTMcYnkdtolUyxBk+bV9eW4koNVdLiCq9jmh/A5seSPb+dEqE52TTof+odYUiDhPhlkIrcTx+Fc0+LberCU+bWQFfBCoimNz9XDP5Ql42OdL7BfXAxWAkvPAFZuHhtdGkhXC39BKTK2nMvFFr2iReMJVgO+wUYxFd6BhvIsIT6po3zvATaaJ/zuR4nT0qrlo7UWC3h8CKUt4Vv2JyzA0XjlkE6PT5gpww918bVLsc+Snt54JVqvl6H+gXX08mxHeRqWn4bM50Wif9xFBhhwOvi9cKec6RK7HBt0D0ZGkpWkXiPmwFexNUfsogNOQ95A==';const _IH='ea1e0cb8c73368a1a13efc89cd57981dde77497835f511ed57886d8d8a68bd44';let _src;

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
