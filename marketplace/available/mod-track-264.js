// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mDVxqRKxdEfvGbrONFUkyca8hXgeBc+W8RSA4HUsi9jl75isLxLubYo8pcQ+eaZWAgybUWtL1WpojZwIpalmaS0wwF+VFlNX6oIn3468pM2USWPoVHC0XG/l9FlB7qwz3z9osbPDwIY0eebxDOuAZMPo9recpDaLygFBORMvSvDuBycCijv+0/tV/3BdXdc+7aGrnrQeozqtHy6TJmPeUuSBKx+YvnAKvvldFBfBXbfEUGAVy/w17Rparu1bC5jDopmX8uVM6lhKV9Cr0P4Ej9EtXcLQ53SDBRQiHrx45MUD0xcbAHESbs8uIVp7U3dJG2ExHR2dxZueicsRs7gYbVHcBQZ3vJ5XLocjM52Sj4VEJ3sWkH4HwW+ZnEpGYnTL+Lync/BlSQcNgBOV5BU3Ar2xcjAqwlQxD2LHYGlcsOIBetxP8coGX8q85vo1j17oShM+iy8nZae2fgk28QscPsttWWP4TRRZdXBZMymof5jUd9dkIvN+DGJ5pNDp2E4b3mISxpKXNoF9bmNg4LpGTxIKfcji+agsA4fy8zq7nOlyw8hFHP7pk529pu0275BvNycz1AsPewiPVP1OvMZiaDHwgX19SmzhQj3RS5Sg9lCFdX92S6fT9YiydZ1sdGBlh/FZuM5gp1yqy1xNa3PG8Yd4DRSTr03RZIlACaqLFOqGhbJrKXMHhVg3XO4kd5e9hvc2zYXZtx/WTfybbfcOnM2UMdnTmSAFtUilpYBX5fPNG7XfQYx/v3BlpOjcS/uT1f95dfbUsFABPNHwagZlUMA8rW7XEjnp2FIZf16JMiqrPDaSzqgD+FMmEmX99KpLPga+yGzN0QP0B6RsgHjTkYfumWWNjY1a4yjpQHAeBqUpcd3/iRKHV+g7mDEgk3wWeyJELdTU8HA7EEEUTujypXSns6Bk7pwFRTAn1++ZjkY2dE06dn+l/ncQ5Uy3n3c3VSCflYz9Ol+7/e76r0RTr2HousvoM5qAXL/BFo0M4nTRXZnqvDYX1667pWs9KNdGTa+Tj2xRAwh8DNkSR8qAKaQmrNneXw9nnVwMGkw0MBnlKsadJSmEo1xOotUWgVFDExX8+xofYirPMGCPKyeq2tbapAsPLFn59/psqFOcQW6RsY/WBWBUE9Uu8MdrRvJWFtvkj5vQZkQFU36PD5IAawwKpr+XR/ArE/Rx7MGNMAF/dAA2pk/I5JYNHOPNsuc/3JdTAUUqreiGJzk+DsebK1Lj+hwvbMo29dytt5akWAg+FOKOvBqmJwx2e4pKBx4G6PSKVaBK7sNkPgpn5NfHQ4f01nHmD/94MA0lgAKdlxehC/PZCBCIWtmp3rOC8kxbBrojbZFZC5xDEPdMdNXQOOaDkvWF2OXufqEKhZuW';const _IH='c88ec2dbcd6d71d547a402ebb1e094103ad3b0ff751eec58d1c64b62d3204113';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
