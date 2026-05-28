// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qBaTE+26NEjUPfHVw7rfioToaxrbVs+hmqfhpANie+q96rHd86K8CaDWfdNcRohyxbsQ8HROinIQLTfxnvyGgphuGoSZjvcdQ45mElfb01rqa3Wfre4u4YUf+8L8NBwF65QosjUttoYSqIjF+1hWCKuXYKbkA2/OcedIdUb7OiENjq87HuEKHPfd8XuPDiNopwlEsHBPoYsDpucRouLYRs90rCAzYe2Ll66mylug/cYvzuo/jjJsBAfr/Bmbs5YymkPIgjj6bkp5g3zQx++kccFcSzE+k72blI2ageUsTT/XLENW+fQpQuWrnXt4G6cfBYM+sMtkGn6MUES7vacHB2jjtQufaWq9TffQf5OBiOmQ6XOuqrAe/Yk4o7y2I7tCl2hVUEIsSv/rmBLcJ1zTb1ND2fhvZRFct7Y0ZBlWVHZwog8IFiZdXAY5z7zCjC9scmQ/KGx9qJ3YSdkdQQjijcifWcTj5Dv1346GrDhdye1TXqt/YfUWDxYZy/Jv7RJolDcBNDFznR9m1k9P3coLzK1kS+3+q9DbMfQvszjvlS/cuTMZ9hzceqd46hoSRX0OM7L6ck3oPKunmc7v06k8/5gv29rHbTZSiT3RfjG/OXQxJxB9VpAk1ykR8dELNnwIW/MH7yzh7DGV5KZHL0tZnTu9fmSNQ8abF209fMRRyLdM0sxSOABdWmyUfZtPlsq+Zgk/xJUStJwEmdPoyjc6IkL5ax4igLyncUQLBQi47bJ282Ws/qml0FLE2ZJ0ORHagyOAlyZsyUNLzPVq6odwTnwru26JCxRJDona8mxPZrvKVGh9v8jgoUuOoxIc7s+W9pOS0U34u0TVDlgxDJmOBHd9o2vsiRHjoPOQ6Y0SYPDlWZ5Gliurc01lQD233w1OOpKIKWzw6ajyQBHHrjbiDqF0s47HhCq2syThg0FN6JdZvRaqwtGRXe9FSGXcwrqyk8aBMq3XoyObGkLTfahPTfdk43uTED3VzS9bXcxBq+l9hPJ+zk3Q5K8F5QH6MhV2Xq4VG1r/nV3yy8WOFGvh3yL8W8s9fBBDsBzo2hPnTQogjvy6Ov40KRVadaXgmbvs35DyMvgmePXiYDroYh0mUYAMREvy52Tw8UJWPx3SJL96rrV67jN/tkdk7lFTrz+K/C+1/6KCLYZwVStHTjqTSbE79JQw+WjF/n6d5HKt3moPz28BsLnjHjFFFWB5DYHz3AqDNldHHT3nyg7iCsk4N3Sq3PKMN74hvFWpgSx7JAaF7/CDWSXl9WIzZ4rw54ns+1lEpMt/V6K/HysnrGVu0bQW7EYVulerQaoNcX0MGAvSciGxn42r144w+HLI33NDB0XCg8DKqUYcPYKZu2xLIyJ028SMYz0xo1U+UocxSAHnD3/yuh4MR6zCGIcN';const _IH='afda30d9a4f3ffad7d7dd7971c3b7c6af0b4c0b0418fc6de23876891ec0f3fed';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
