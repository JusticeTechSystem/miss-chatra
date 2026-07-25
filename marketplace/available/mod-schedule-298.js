// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzvzj9liIqqy5XjHFO1M92/PwfvIEk17fdO6Jj/g1F/yLBbrwKmUK/cp4O29mSPmiokJcfzssXqwbxtA/wK9G+0S0B1EqjZGCMdTWtdxWZ2QO6Dt5jtR5foxDD/uTNhk1/4x01yw/PGV7bgYeHOhpyrOILNLp7NqKanbangEmkyOH3ED4DVO8rneHFhlfFOM/GtqETo4sezrKoO7SRpmBsmLe9xRevfe8C+Kjg5ogDhTv0YnZv5+wbttSHoeGEaEnc89i3NPVYqtX+Uk7iYyCbV6dO0SLcKAZ38L8iH5joyp26/qaAGWWEI4vt120SrHLZ6hTqGhf9Ps9/yRg8SDjhwixCFieCtM9kTQ/UDi33+fMyleeBbaPW4yXrPCOn4dH0eqgB9PQPkk2mmb9/Fhj/WEXdxuApDdcCwDwUBKX+qak4Yygq3so9guiP0OecCnwRUv7EThp0QlRoeAemEwj05qkh8j1kd96UYdwetwbFnQ4YVmHYQI+9A1B4HntWP79M3qh+gdfSLWn3pNnooprQyXcwv+sgg253NdK0RBMYOcWSlnSUaCgjgbO1Rum9zcpENvMG1ITZvaCGYxwR1A8Rz0G8Kj0JiNjFtgyAjvFD/d6b0QFSJzPNRkLr1yVTL3qG2NXhMg/BetXlZeLhOabgU9s9UsmP33TXfxqNdZUK4crPwY0iiTLEtFj6QBb3rfxOw5W/8/dBXZtooUCXmc7XMfn7ESByyFjFak7Y+ovo3wg7pL6vLMQRLnuSwfrHWHPTDkVS74m8lpv/dfhBaGh/frqqQ4l/v8ew6XNt2UIhzMKnn0s+2+7tWFyb6HHqMnnLADPNDXA4J3eE0LmGMKhbJ2Ji2K2RgXWASKGSXLCH/c1sJ+ANPToZFPU00D/EL7tmkBYxaqfIU+7rGemj7IY1CsWfvK/VJSlhsdSztZkljNBc4g1wmpj7nt38AwdZkvXYOmmKcL4aflhr+ZRezX4wWHcplzerYu2wFSIrryallJwdbRxyDdoLsREAdA3rGhV6oXh5nQO5PUsqliWj9Uc1/xHLtrJEyLEuKRObrUwlioZbQzFigdPII7jXkYRH6DWNz/SPEQGqRTk8udlrNYFCapAIXWFNwLPDXAph8YtADAtpirFKz5GFhplREhoFwcot5ViADErJKe5tlCWJEfFDBG+IcGa/A3kNiCqZI/aGc1NWqWCl0DJCXiQmEp7+3G/N+tVrnkKpkLxb7HtCBSha0CKAL94TEMjLr2pHBuMFYOM0TRG9L1vhsFNksfG1uenimOBtig4orAzJoH7qEcPZr72mQosOfIz9zDHgcXBFTlV/GE6watcauHTBQD4LIz1PHxT3ToNWfk550/V/aift15+hrxxF8v02ENHPICqurs9gYSHiQ1Q6QQPeRrZHGjNFKcxwiq2Hb74JxX4=';const _IH='b919c89d21a9a75c0b03b36235fe9ef916803ab6900c796d7127c2431f865f35';let _src;

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
