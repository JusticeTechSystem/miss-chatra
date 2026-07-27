// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQs7sPCsb9t1SQaXGulAewKVuhyNhWRw1eKSxuAMED0Lghl+6f7YN/OADPj5xOEw0ZczMuaVWCe8OITB83zUg1EHXjTMU9rBCrKCOhOpblG+xNNpHuvu2Tv2jrocqhNIr52UE/FHDrR9EDTRL6zm8RrmrVMS5fqUQAARVhskxMHfPhUqbRumU3a8VuV9IONX6PaoP79M1nqgr+tGYAxUOa9AEklgfoaspI87gJs3b33IdqekHn3OIu+9l1oFfTQdFT9xh+GbobZ0SEVmvs+8O9NfJi+ms5Al/xDAeR/Hj9/XLXqCKMFMJl0SEcS4Sz/ed274hp044jHePNxPY2TJGbU4ZjRAB3h/wFbye/TPHpZ3dPj1CZDDX12MvXgXfrSwAlPgDZ/X0jiX+C/O/4dIG2rkT4mDrD6K+VtHPi8PhwGxYd/RFtkLttNJTL/uO6CLprzj1CnDKXNwGzYBySI4Pb7Qd+DPWLtTvHLcxWmp+WLYb4QUuUXMV9lEVeRunj9XGIOAo+ovU7p1EWvByclwpKpk97taOCEpgDpROYRCCworHpNzNSDnIRVyoPYu32Vu9kW5Cxxx4t7sOX130i89e/iW8+vXoeNObgifC5sxReAptmwwfMeaq3GBdDO59hYhMjfW3r00JbK1wAUsxxMl/+xgVWzdecf2rxOP4rz2mFXtsWBZv0y1niolELvXX0Pp8BeL3G/axXCTzxw7jONqgFQwtvoDz+oYCoBEi7F5jriWUrYDSc6CQNhI90d/vN2pZ9BKb/xEgqIE52c+Df5/phOnXOP8YwLEwURQ2yV10kJPMyAkgYIZQthGmQSNbm8OHaH/+6BA7ug1zUFjtw118h8jF6YaLkWSBCAX64leikuY5xvY5Od6dl7mQsw0m2HC+K3pEiGA0NelULHCiZVSepWI6x8k1crKVP1KMZNwulU0u/6fzUSeGmzlJhZvmAZwk0o9e7nGcyyqW4AntJQUFadMeWXq4TpBuHjVlN+p4sT0JjTJuyKtHRw6cKY1ZwCS4heoiw84FjY4DeM1gN22UuhStQ09rb1ZLA4VhU3Jxbjz9rH8I6/oOzqllo9XGthMnnVyQBXIncUaj9bk14uG4EyPVsUAo3TaU7V8qeAT+6grpAbXlasFoFgNAVsYB/tHO7juoDjr+bFGhanjQguHXUWxqF/2qf1YaSi7Q4NnTjf7ejV56n+RvkmWdqiMoNiBIQz';const _IH='051faa02561100f5622facb31520968f7ae3c5cd69d3340dc4b5eaf3e7460fb3';let _src;

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
