// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRjicgIJe40wiYueCBtt9dX44Avo0taaL0o6wgd0kOSsP6oCCq/4wtoLKDhCZyNraGX894HKXii0hdfzCZ+xM0z2+Go/opkMdg5qTK1ZU1Y2rZo8oxqRCQRemcMIl6oZ1Cfulzuu3Q2X0Z8K2w0kJ2BzZdDAukWiYNEOeY7XpAM2zbPtKCloYhGK6XxrTGDyleo2Hzjq+Se7SXvBBW0zmb2bL+XdqBHmredJEUdHPUzs+uMcYJU8PFD1Eov3y02GKaPQ5xIyx6tMK4eHnV37/mdf6if246mMMLgmwrfg41oA57S228D8bmyupGdg9pq+ipgRNmAZJJP3cp32wuStIiD03fRzdxmC4e+9keSS3vsSxbvqWsL54ZA3bZpUfnf08h1zR9AyJQhV5SbGMQgGPNIi4f2fivepNXycNX/Z4Xmhr2efckyJ+Sg1GSzPR5cOsgYHsNtqY2zm/GjwXBh3c//7uvAN3NJyV93Or9LMMKg6PMnn/bJfJdCInsEDqgt218BMORKhdZz1EUwtpJfjHNha5xCNHJlyUOjbg2tU2JVwaeYOoopBHv0OC51ONCfAFlrlWryEgnJhlckl2DMY9IxotBKj76z+9sgDlY9Y4WXsoUT6NKbfS/vHmf1qol7atjAeoVX3CFLrfb5s+lq7ZtaTCcv3RCca141wZaVnk8uTL8tF37hYo4VIFOjsez0r81UvV+y55sa8xeeebPTu5rOfVWazVheX/N9LPxJsMl5CQ8Fl+sJ3DumUlM=';const _IH='0b99acef2554e4490d0c17918f61456e30e45f95efc474936fc446ff50ee3118';let _src;

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
