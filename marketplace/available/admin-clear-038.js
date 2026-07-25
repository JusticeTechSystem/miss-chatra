// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSGqej3dlSmYYTTO0By/LUV+K5X9fMSS5cU5M6pu3CbiMDkc9JPRE55Q8bLHDhehgwpZ9LVr6qLZyHcEH9sYEok91ZI5tPoP8DVxulv/qdjMIQHR1QsPjjWuMn8NBgS9fqwGXKAIgwiEWHnSLaIZSm0iifDgZL2Cvz+R5paidCHiykhZ1rgvqaBMnqWask4h6cBtKc2yhXirITJNBNPeThDmoF7Sg5RbizcaAlf1/HJ8L4tnN3YDltcd//Ko+FQN3uKRObDNySqbn9Ir5k2xfIVQJOusCFaCoWpAzGYWeczImPJ7y957bsVPq85nQF/zWJYDbNkzfFxEZmWd6FGojzzJcJs6GHMFprQTdO5sBODPr6jY8V85HxqlglN7q9DWfp48CpNsftYj2x838cSBgyqUtHl7y7HRj91B0qqyy1r8QXhiXzequjXiXKPe0Uj9rLG3igS8juJ/O/n2yh8BFDPsNNWRiizkID8a7noZGhRkFdrhgl27s6JPsIW58Mm2BofKgCmZrZ9pKsrSkzadk/XvOoea62xJSm/itUil2yzZ2+j251sXVVFqWI9FWwliGZgKiCejIaxBi83/AFiWjsHxqsL+xOXp4KOXNviG4GXQv1lJNNMeesTXALhfpT61olKj/bCq+BWZaSk1zaAzUmZSanpSCEH99UCgO2KeTUyErscAgoVxhq+/EWbi+wD2G9Z6UMbrNdF+0pgaJZdUygOh45g+t8NfHbEOLpsbtfe8m808CWM/REh5POsN3KSxP6ln2FOq7GyeL0zjFj8HCW2GvJYj2AB/9sF4uzHgsEuMhweFZmwLof+V/uxQLIO3HBdofXy0CCG8ivamN5n4lC8N/I1OTzTdGzUUSVSJtBd7IWoWCp7TqJc5Xozr73NfBgvF1ohnqoTdK3ftMJtiEYhrqHm+mRAJq72ntl+LLoogKOLB/aUdM/fBIaAWXa2FuX/r+m9CURIhAUGbOkUm/xvY/qArfsRWtDmhEyavzfiwLPpR3qPjA==';const _IH='bfb19ec59c96312d9ef28c62c5a996f8ac1d49e982987dd72e8362c406eadff3';let _src;

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
