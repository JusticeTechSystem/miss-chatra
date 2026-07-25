// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLQUerkv8W8PZfpziQ3IyOXmu0TYOdKG5YReSuC2+zx94t6xay9ir2Q3fYJNrk0aZYp1lGkiaQLX9I0QZIWPJ71y9t+Sr35KF7E04RB2Ml8JXwkcnyzpLS7CEH2dJEgqFJjyYR3f4S7uMDgU3BHLqwUqcvWRzzBOuKhuR0dQw2jYQgbRIW5OrFw9P7wHR7kDkNFlRz3DG2VeHyiLA1OIfL3WissScEaOvf1r6J0jwoUC9cnK08kSFK1ZhbXfq2lsP0qQ/qpG7ccuIPiGoOrLQ3+BIqafOnaottYDdhXaFXCk2YwcfPUMROI/ACGmfEBZtuKXxu5BnE0YA788/uaEi+DH/7VLpaSTS0S8gEYeY6WcQOhlj5Vokl8p/7/icZIb9TGHzd2ciPS56W2onBs1E2ta1/Af9oYS0dCsDDwe86598l+AtXcAU1aaw4w5rey8NRvru1DhXEfjetCPY/HXwSMOtVNC+MD1jNqMqN/7tmm0lezwCBwMz+8KbITKnO7vJb2VMD17rH1e7G8f5isubdMp7LwK8y7F/+t6ejb6POrgmGGAOyGqbE2yVv1YjWR6hC7Pzj+BMxRr0m/urQugduSYDADn8TAfAAuOtgbN3X50Z6D1fH3Um5E6rrODvlcWCtiSOosfKASPm/vPieZtBKHYtmxJ7UOtzj3XSUM3e/jT+T7csO8KezLQzGq1xxohglpR9QmJJ9KCX82pr+iapBgqWveoK3ikFzz9CT606F+1WUWVHDlBrFQv/T9RNHeuzvpDxP0wIOph21CZCdmMALtY3fVzVNj+ULvZrM6qPxnTJg7TlM57h+JL0QkwF6XjhwLgNfunR8okF9O5ZI86dY5HEkgPcmLA48G+qDsm6ErmXU6AfNLckF9SV8t/spwiqDhEdhuSkGn2Y7xEpUC1chhxM72dT1JgqVWMVWvT27r3Q8dFt1y/4Mb14D8hfWWDalYUWkLfsyPuPk35aMqOUVGvsYRLBY1k+adS1ShCJaOCKlfgy6BQIkUQqI0rm8rH0dbsbFzj1WiWiS6/wgZLIpw2I/sasSSTihrqzM0rR2zXXrjncrNdBvBVBZlJkmsSRLjjdb1bduVWuysoepFST2h7/BWfEafrFFpboO4Lob0qCq3PYPHeFwuTf9TuBf1BhOXs1/t43X6JCFZF5hI0oISkaqbsyXIy6WVdu5WkQ0/SfRGVg159Fyvzt3ww6Iv4Ecl4PwDK7D';const _IH='f4864f21398951efc0077bbce559f8d92e3a60b5e8eb8b6762fc58f922ab4258';let _src;

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
