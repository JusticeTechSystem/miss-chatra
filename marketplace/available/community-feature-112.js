// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThzrBpQddZwL6Epgd8nJL8psb4T1FW040kMQwFgmXfK+RulFJFQjBXcX1QQ7CpXoaXkSkzusJUzzsjNImXaWC41LXuw6obP4lPos6IMOIRrAMsf72OYq53DQRt1G1Uw3vwWYJkiaa2aMKQJpZs2M9kdo1tXYkbqxshM7xRJaO7Mc6Ww16hIPLt0NimvxTpBqR6NXcP5sbradoaL497n2phpCGhTokIo8dvXIxnhtzQbngwZvgwEivWb0xViEwJNkH7dYouEK3Nbo9bS4oroVWfwprGiK1ew0nl5zZ/OjM+WAK6gEFKh3A2kDGBZOXc81DzeO4mJFKNNkIEo7+ArBsQ80NCKENZ8MEo5X4cCpgSNto1HB97LJ9CGZPGRio76DC5SvxKUFOk7fzO+AxOsIGPNcxkRxVrY8afDcE9ryZPR72MDgfF2V5KfPwN5S7VCNytY9EukgGYjNKnxKBH0Er/msKmLV9XbPMrINNLp/B+g6WzMlT49XHZepYCreENfc/lS1IisMhn61ZmHJwfBfuXMEKMffrAR6dUZKXDu/OyAIhzFWKk/TmFxE0+T+f7kkfV0PQ1JtP6NYHcbjTJRsZyNsPGNS1wwa6tE0bEXzBJkdQbaY9WqFyMzZ4PBno0AcVD2ckLRUAAkRYtmvJODJN4BCQA4eE8hW9pjG+qTIxx41+kHo3ctivjxexnkBftTAk9XQH8ZzHWSlPPlRKsZvNxafjyc0g/OeKo1/4eAuRH2ddmcw==';const _IH='1f7b802b89a5cc2bcb914750b3d11135a07c95f8aedd028f65ef90ea3dd26783';let _src;

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
