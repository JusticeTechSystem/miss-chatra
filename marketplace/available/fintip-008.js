// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UMGMCJwVYw8QE6y19DM7/hdz0PWr2LFPtUJ5g7+s2bUF1wsGeknH7HKgRrmMhCKw92YrCtFT/lBAU6Wh36gxWF9ixBTH3GdYrYHg4E3m/6KIHSirLcJbwCupoZqeOJxT1EzmBIdUK40nuGxPP65/0mP2HLsucUZLXcdp+xTnDIhlQ4kfu0fS52yGi68DoItVG37n9XnDBou8o9WwZOyIYwZ5FAFdo4VwY0wEm+0H/lbz6/F6IRp9doIYW7YOT7er+Co1fxyubHRTt/B7r90mz7oiZWJCvqyCrzGQ3ZP0y5rQZWhzmbNs1zu0fpfwilv46nx5qW4S0KzK8c4mqlGVhyphufLhz1oG9Y+rMvfmEJ1RU2pVh0Cn0s9RUuGpn7HqIdLDKDi2QztSkTDM91kULHhe2OP0c4uqIBF3U75ANXHcU4kAyVMkqG6jhCGOdUGkh7Lnsg87Z2fnX9WAuWjmT3aXI83D3wkown2KBtVybEWrVffEnb1gp929WOIwfKw0YQ5BlvMG1KpwVzighfvUYLIegmVLH5q9lJbc+55HtiqwofHjyIjjEfHvxjTpPpQFBFmTmUGaFUAKRoTmhQPA7Xgo40jSkfsgcq2zDG+zN1H0Q1IaBDbz4JIGJHI5bCvbAn90TRM63vxNt1Pt6rd2D6OrvjBueCoGvF7mLg1MVL6PcX+Uma3HL4E2wvOOC000Hamxs7PF4J37y+j2yui2h0rwEGvngR5zYX6E7OU440B8pKC1oVHZLmhDXPEEqaHN0RZ04mWgCi4Xg5NHlVYhQXmKgmNtKvrfXL9tWgUEEmjoW6iMOj6QtHfM1RyYcPI+eWVkErum2MTGbqhUw5SbY2Z1PG4yXLsMALagZEehLNRaWBio4iD3+5uQZTh5Y2/800TiK9kXTW33GOR3I1u+tMqtvu4KuaRZi3qT3n0TLvo4lyRaGUNVVpP4MQQYSNmVV2wHxLU1QLq4QnOSHJZ8xqW7JNwePRlEWQKYWfzWiGs9Cxi8rjyAT1RxdHIUnA3QYbhj33P8Y+HeEC9HXs5W/i0DctuR99b5TeJKqb1n';const _IH='fb3c39a953920ea25d6109072ccc4a2b4bef0da17896b2947ce3f298ebfdcd4a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
