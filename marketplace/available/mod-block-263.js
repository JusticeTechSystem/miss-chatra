// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRLhQJ+0anfHAfjzIWAHrcJ4vd4gcSNNJlhBkk87m+Uol1gk9yrH2E8Zu3dsdfUO44Vda6vzMRN6xDwVe99ZNkxV9Pgo4qydTBa8Apadkss574dS1sJT09jnzWKdEsqc1pCr5nw33W35LQeMOYmosHTvVBTRTEKhR+eZPRoOFqmAOHRJjetBkmn0N5E0QWdVgv4vgsmItWavkock2FF13iMg8sw+m3fkafkjouBuK5RQ3Nun/D7/rk3zPfiRRMe7YtNTia8hYq3RVYu9aLUNxLfQDmfLR3C6xUshviP3pWrxPMwTFlv0USmH2Z/8QMefV9YzGyhpKEGCbm6jrA/eu5V+QObR4FdXO3Ag4sBCzpjL45+mQ3CFMlOPxVtyJ8vkZnt99ruN0v5HKemNRygw30TGAR8xdvdrz7KIjLptzosHTVp+xZvygwYzPWF+G1e/7mHiWfn1NqggGUqTv5MnHtlPlqqNXJDguM8k/hw/UcYOFziM3FRwtgNuD5fV9CNlGahB1U2NekaouflcZfYzN8ChoWuwPN9Sb5U4wzFOcGLEYwOh1V7nbOpGxO/MbgU4u80ERmsIrZ0zYsnnpFyu82MJ+5SCH5GtM83HjTc8N7OC64fT6E51lDjfq1+RUFwEsQlyCS/xhmyJgtyPu4vemLo3AcS3AWOFhoYtr0Nw42NbKaqLTKewiWv98Yg+iJcT2cPrXjRaQLXKIRMJie5xdln10Yy9SpvT7791/pEM7pJ3097BKtQLrbvUpZC5Vd8wy4Mz3VQcpIJIDJIAu+d07Wv4rBAlItF9rWmaJjWM2d4ygfPlp2xR/yIIv3gZ2dJkKnEPL0n7Dn6m48PWqxGFXBv6/gSfR9jdMQBUtZ6CuDBO6keSOOU9whkfTxJJHLefEZ9g2QrZ23iSXYD3N5AKYIai2VKttsGmM/kt45XO4BCBerQEPhFCKyW7jYBU9vnzSDQ2AqsQKetpuPt+2K10pa42WXeSkFd7aMTbE3P3I4Nu28gQnfS7kLL5pleP0fOw4uN1SBLbtjJVaqRbMTzgDToqjpUVoi3swaZsqUAKapzS15khP29Dno58EV9V67Y/uDHccN4c0SCZxwESyjVav4rXwMpvaJq1V9PydNA2XZ6tHiFG5wL8QhgR3mb9mXg3CPwEnJwTaIfzniCZPmNG3G3Cwffynbvh3Hk1RF3VzzQS2rlk4XWcpC9sLA206AdSRYq/AOdbSnsAf4+Oip6B2nQFXS/zbVx9Kd3TGpadqF66ZToioEeqDkCsUGopLXivQlfK3LgTrs/uEGeGD3wJF4XUnHi5uK3YaP1UEboji5+Cg7C8xB5xH80xNue4obK3fDDrX7JScW375/TI+9cyNqyoCBx2jzRv7oHIEQ=';const _IH='3201399afe65bda44ac2246fa58876aa9b38542b21fd068d0520b7ab5cb8dd75';let _src;

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
