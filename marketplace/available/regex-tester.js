// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGfEHefUVubyut+TsJq1In+DZ8Y53UDNSFEreQctbyFzpxJSbvLuD7vvUI4wTrZF8AuLbc4Q13VqneB5veccx5VpOREfeslmE6LUySB/aKeu2jTWZ1A/pegwWg2gD2Gpg5n/roBSXoAIMbvw7vsaauNsiddczqkLcyIMaLbO/wf/0rgNbB5zxMOqYvfHM1pu/WMpoiauy9Z47puJI4PrbcFj3fMrUXIGJhY3SkQ6bJEhXyvyi78/gcIvqw3TCFGHTQI44unYPTrd700j5MWS4gV0Kjsh1fPxyXKJKgtcubzy+aSZN4lwUWNYTvBrFdJLdMITJ9tQPfg6C9pnqm/B8K1/+nD21V2mf9N6uT9CjVh2PRX2ZpW4EfAUIQ+EvQo2sMlhKI8A/DYtuyOgjS7HP3ITaYyQh+TCzieQMJVOz6gfcK+sqEVXKRYTQgZNFzAfjjebVUQcDl1MdDXQcDi360G1+qVnylOpdkdxeoaDq/YEMIc3xSKIJ45rHdCUMN0cTYIduQx+p23IExEskZGMghTvUuEqr9dkCG/2UDGuULrMSTGwCSiUEw2ThMG0V2BuhLBjBdFUdlSyAoE9OJ5v+pf6fourg6Qwslk37gznEdYxp2xQ3lXwHWaZFyDtuLWn7pTa2zp3O7bF2/P75puTXDptisZlQg7h7Hfr+PayHPok8Jon9nNM0F90G8EeUSRSO77O3a+Ikz1xSZpjpHIoIkHUAap+I8VYN3wII0J1LgIl8PgZV3abaI35n+IYC0P0BpOhn1TOQlvA+0gwVwoV1mv+1Or/eexiBGnr5OFK3FpLEAu0nH9iEpOt50cSXIR02kgyUIfRnbKQkrdeuJD/sgvns8FeSUbNkfowGvrLdSrxdOsH5aDmpr7D06nFuHuNd5ZEJcG0xMkDtWF31PT02yUS0XJTykX7TKtA4LahG+vEcaoz20Agw2VH9jt/WwMuyDKNtCgpaPIJHhm1yz+IJfbtp5NN3v7vgUyOYjtppSWQdwOIOjLlJjDh5Px1ik8AB7VgY7U/Aqp0z9WcWym8eZupFawYFrl4eqkYoUGAAK+iD8z+cdM2CiQoUCLrFSmNcmhWY1QUIbydZ16eWB8ubOLhnHSxO0jHeaj7PSV1mNVJJS5Xq/nHS8btH3gDlINmt5bCGkZVtXV76b6VekuU6oLhZ+7QqPjbS/02OQrc8RHEtZc5tknu50DOFv72GWL6VMXYDoxiwJFcDKN2opK3IqDBKpN7s37kDlbRNgRUT/zv2hIMdvof05cX/1DC0XZRgmjpt4C3KK+n0VPP3WpVVJAA7d1luG+vLUUZPYSSXdaXARjoxa8DvhBwqFiV4PmePiw8IBCo9cZ/wlQgl8n9XGO86Ivmoj4+lJr5TswLhG';const _IH='fee65afe5625fb08ee6f4f9bad19a7b20d06839647b0be8eba339d3549a3a3ff';let _src;

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
