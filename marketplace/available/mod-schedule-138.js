// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRILOtWVVmFF4HXKu3h2j6q61IO8uzSSrR+elPd4tvcuMopSf47x155PVhcvVApLC80RrziUdtYEcPwucL5jrvTu38fFAm5m3/JVt8YjkjSn9aynbPycwDY5Pun+X6MOS8svnYmjBBqlttIfwW3YkTt5IHSyc16VnMzaFZS2sJ5h7iQe0WJwkRFL+YMrvcy8tswNsOpm/5qXi5krJzedxYbDkl05PZe5gmi/OP0DDM3VjLegQTXPU3nskFCn5RugAPKSlGJKz8EJzEAOI+q/C0htJYboHHiMdRXbPEFSLHoNH5cpKIxdhhuDS8warptuWk5EoHCWo1n/efxCVSHvWp3dfCyM7Oizfq/1cK6zwaFvYDTApOVFHW8pmA96s9SKEccxWKCsAIRLHJ9chkNRT/Nzwl5yijZ2NsEpIG9+mHS1liBmB/l1dY7f0fVGzVqepejPIk3AYv9t1r5RT+GnEtPI6aXh9fJICA/Y5PWpT0sURJzVeEPBfauAN7kydzgxA/86ip2vBFdjzCug1HJ+AUqE3LON+aTCtrBv4R511JgwNyLnXVC4n6N9Ya9PxxPfbFj4YyweH9r5rgw/JRhqmiHv4JeLfoBQh8oHuxmm+WiTNst2CMu2ghExIc3VtZBPnQmAjo6hA1tE51oy2Nr54UG2UJBoKp7MHO7/mCTUvBdF97SfkaJufHjpiKH0mE7mXVdw9cALcp7RRFxnlRqhlsH61zVljrnBtcCjlYk3FwpyCZr/saMw/F4p9E/YYuqOk7yhE+NES5En95kb/Xjb0IfVp8QNXwTU06dudlL27w4fho49Mr55sCWdHnBJZenjbzOKl8jCHMoKHyYX81Ntbdh9wUe/vFkE+BQXaV60IvcPkaiLDbmYSLPMll6rrSW4iBIcSW2u+5KBI8VTgY/CZlWvjlvsEtVeQ8w4a9OIdik0A3TVPByimwjOQ9cY9b+jBD4hZTJwiEhE5p6T1OSC8yWXRxm6LqqvAn79N4QeH6M2VOrsK6Be/TK+rUn4dpyeBnaso00iAF4KmeF+4khpad7O7V5FcPQ1K0cg0Ssv6oBdKWE6bdpyhEQ0T2VgEhMWm3ojHSDbKHlSaEEQch2x/vZBxZFyJkJe23nYew7HECUYUedwT2yUNC6WFcn4HC8B0GK/S0Ae6ZkwbcK6LHxImcJp5j2jFTfNLTeAG3VlB2UXDdDIOsm8CnxU63PUUEbqpXgScKOMUYZ0U3/DZ3EZVXBKMQjPBiDEwwbJkgLDoNziO01O9FN8MhvqAIAVqgb7tQr4/0nyzjC+un9IvBZpT4ZmvQFa9SyVQUZuPLgm77txpnC5LPlBNgt2BgBWQ7jDbGcP3ened1qLO5b5rpxCUoqVrsVOtqZMAi0Ic2V0PoHUV2guyV3WmJHc/EKc9YW/KETw/LEXjfkGEImzPk=';const _IH='ce5b3ec319ac2d5f739b3c96ad718c23488256b0578fb32b72f10c38659b9948';let _src;

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
