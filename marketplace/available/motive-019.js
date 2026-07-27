// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxrDC1Qr8+tPskNQlHkAUTcLN/2QL/ZJeVzagggS87bVAYvf2YS+sIu4F788mGHa9xuZLb56mfRkxepN4uUdnDMZ14eBBH0FGMqPYCagInJlAV/pjl22fGGYxAWrMbcrFuw1ZYLqCZmG4xmOgSbbHZ3cXZ02FU8sH17HCANCZyUnRkPNYka2C9O5yJ+o4sIXICp9X+/WHvesRIiq7ywqTttX9a5+wXPoLazG/gTfj6gro7QgsLC5dGCrEBkOQFs9N2BYmP8Hv95bNHfjzegumBmoR3ca7o6sapzcQaEUqHOKAUKUNsZzL8ipp0wCW02blGvp22+pNIg9/VAmj79tVqxf7bytRKSZdkXJQ685jEmt0zMDwwcDhPhbAImf3JEYnh0BKOm5HGdhpk2v3FgWozBKvDmGrE+kGJSF18FUmeiyAnMJZzv541pswuDUK79o2NryJFeMGiFywMCeY/xJLw58BgbiYX1x7yf4RUhQBodq0hD9oQPx77maMqujoQkRdDHr7p2WTYRjvnvCgn+PsP8neKjJW8L0OLOwVSE/mZdLbGkItZ4ioZIxtOVLSVtpBvoDvciCeKqQ3peHDaAMUt1mutcJKfbOPPogVLtTh5oZecfMwGcch80yTQb2rZQFN3fNDgIMV7Nn843hxSUWUGPZ+9TKfqrixug87WpS5Cs1g4yW8OfOXky/zJLgle0P/In0y4vHh159ctCJ/gyTCb+nMJbfzo2A5ArHrK9Ebm0w05NkGrmnuq1uyK52gr5BhC8gSCNtU1B4hwJYwKC9xg4ziZR1aWK5eK72WDnK7SR7W+ABzS2gI+doQSe2rZMtmDVbxpJ0GcqiMxVFkRPETTl7KD8kLVbOeWoXw9lqxrd+vQphuSzsauxG73fbtLaU4HsQMZZRaPbTEoTSsV//pyL6JKmQ/taD6BWKXgx11CmGPBY7RG6UR7g5lYIyC1EE1QSs/HuCAA/p03AT1Cybwy2kBmc7x6k+SbThFU/Fl9cw5OfWWXMMvxA6HWNZQijE4ianx3UdKZEiMLxiL2OqA89RM=';const _IH='4867b1187afb8dc92e392f4e5c309bf4caacb653b870789cdded0015d6183545';let _src;

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
