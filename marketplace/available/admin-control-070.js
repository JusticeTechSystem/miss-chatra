// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LJkdQNWBMc1oGE/9b3OFNeo+gw9l2ROwU5ry17bQcFJWbpJ3YvOidbrqKiQQS7EbweRVMWKmFRbsOgXmyWMwSoKcwEEJUATJiSshQEbagqWL/BiKXxClV7kRPyBCr4zMWiqncWg2iWjgZOgMEX6A3xtxMQHnj6BLM7AWld9j4MLY5tNb7XLeF3A92QP+ZGqU4yii9Pgv8a8iHBVavnPBdb+quFFQJWpEW6Cd6z0b+x7nd+3GCHSGgpJNzpZgmu/MYVPXJNf86lcsm8sdNSatK3gzsiEhefFbxzLxlEJkkpoPpg53AW+Q8gON+5OWzFtN1AalMRIxZz01NF+vM60tgPy/8cvAvlYKXJ/soghfwqBcTRm5ht+QZluAWlabYVJKOqddNM1vhzrC2F8BB/e7ak1/lzSEQR5sl7YtmgR4zEecGevcBnn9RReau4GWbDn8wy0fMldJnzZewtYpEHAGWgDQkQY8TzxHSBho51UtpixEHX2XYIFD5Po1tY2PxgERxDi1707INiHZScLQ7PTC3JQyKctB2AZQ+rSIvndhNqbFRHHONQzKlocbOz/hw/U4nH5pCEfzxfkeLJ0YrC5wWycrsEBm5Tp2FQrPae5U+lOS/i8wtB+2SluqI8XfSZbczcOfkdnn83jck0EVIyn3lQs/hJLq194etV0Cba+allf0UEGc8jT/dEIrLv2BJHSWKA1+m5nrv2EqOliMq2Rx+upl/gMIAGWMG+hq2pNGDR0LPg5XqwqEx866v1tZVDgxQZ+q3LGGnfeCrZK8gzMUdCUt34dKdDfAgfToiFBVOD9p0+PqbicjGYyVIPFfklqZE38IV/le2tDUS4yWWJda5O2UKLvne8LcmiND72+YOCbk1mQ3X+HVhInzt5f2aLEpc5KC7OIxGCeGpWuyPAk9MygwDHJvieDSmrnrTVjI2PdYhznxsNQcYPFv8w18H4g/hBGheL+UNMo2GU5cptc+iUbOZghMg7P/ln4JwN513qyVqucMHXpgVrRCCu9etHdmfwO5bA==';const _IH='90eae8efd090e9840f7566645c784e895fc2cb1b1d27519887976a4d4dd6d2e4';let _src;

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
