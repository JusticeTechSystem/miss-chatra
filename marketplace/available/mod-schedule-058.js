// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iqsKXE7CziM7dL925Tcqjqs3iGMcF4OUFtFHLg4IDjNSBpMS06MHArO5eP/fI+i8RXirVFCqrQGCuLye0yLCDl69hp9daYB8omR+t59qpZ9bDqPD9+Am+u3y1G1aZOtdG9hoZd20C4s8LsCnGT51NdYTCKf7u7reOZBowHKrPm33rU9x78ktNHRAmJSy98/B9M+7LkNV6TCcXIIMzn84KO/fLjvD9aqMmBYHWcMJzMB1rIDJ39hUoSIqGuE2qooCxoLCglt55v8+So0TRZGL+iui3DKKsrnw4diqEkYBwV5qO85xMmXs1QhcO3qA2gj//ST60GCwrYYbYZAOkUYgqFJWsdKW1uhK4/IGbeuMN7CzQ3UWFTJiG4376e79OCbefOSbfyun30ra1PSDuTn3Bl1SBTY9pdKVgkXHfRX+hCMYmHcViydf6fhJBU0ddMbSeLINRXHfh07LXiOoLpuvT+XC5tePc2mR5egbD1eBiPtvXEuZ7piQD17lpczdCIDGV8CaMY7hi1Z8/UjgwhilGDgXlXHmw8vNa9sswl4/gXQtmODHYqhxC8oZXwWJzmLtL/Prwk7QxqioAQ1sMWgFqXe/1a8MkMkL1bhYVTsOMFnKTY4XX5hUzYPCpOxOeWDZ4f0wEZs23Yt5IsBd3dqI+WbB33lnbbRwkGgMKBXVDIlOODdKKdl18GBBijCajnVzXz4JfHwN0WXVgbfZ9hJWrqKuX0whFARnFE3iX5iWKX+LdqWWHqsig5/sURjCQ+szOxXTFzGNKpiugloUmwZLpKO8RCcMPLKZs+cEN6zwi/bP1+RlUIofhglWjB8Ti7OzEUvZVFX5b/RRxK8Jq7E0msL8N+Rx5DFNIdyjX5wtRKps1FFusZqolAAuHb7BJ2OMj58Q554KH7VG9myaPmlAfZEcMtDNmOJrDQn8FZBebl/acTrU4nmV8p66HmChgrq0rr9tXyBlBbHXAXAuG7qgBHDWxLJamq2ucUnD5T8KUMfv/DREHwGkhb6eLWsaU73T+D8EP63qM1iX0K3qZr9+zXkCMw24FD8Q/oRlbpCkybT3SPdnwIoYMVzvNo+MMIaexpPhnkBJsvv22FsxKSRcorjyUMA86leG9G0bZuQ8iHF+h75Zme1KqI8Al1oongCFP3PBWYO78fTFwCA25fZVQonVmDnrQwjXml+4Saw/UXBQxKBT4iUxU77gYpup/dTh5DPaRgY9tJWmQsj63tKiOB7sIzoldZMzJIrBhvEJbE/BfFarDytql07wpGWYNnXz8LJHvNMqwfMCU2Sg7Ht1cCfuU7qVIM+LDDGEN+jZsb9dxJDa7qIUUyVr63QTnIhdGvA1H1kyTpn1RGX5r/H6uDTcBL6tPF4M31+3ag3fwy7zppsIAvbKbSKRl6Woad3RcJ0e7O+ATw==';const _IH='c1821d0248f4dbd1382a6e93df95ca9e5d4a1898e82bed01e4821303e472bedf';let _src;

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
