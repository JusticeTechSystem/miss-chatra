// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eurY5cZE/ySdt+KQDSV/tpteGcGM5tmtMraVWicN1TgYAUT4SiTWPoCdnP9eeTqutA3hISobD30Ks6q3RFE2NdekJUhM+BDZDgqhe6Dh8ta0UldeL6gLYzsaC/YsdYb4RESu+O9ReWsGUKm9AisRLw6hgZTd+QjLQnWEoHC4EkgK6KncJt/dkHVGb8i+dcxku1VS1uIYLdUDBOSqBM6CilRF7p+x8LZb/vQ7/FE4HHmSRvlHHG8vcbA90M11wS+S+nbNBQZpMrOjeiqMixG4Evpb2IdKWYoRBX72kSqdNbDIxQ2jNsjEF3tryfaXXdx8N0CVLAzyii0Gk2IWdu6T5oNkFJoXkgKscvL0YrrymApDaJEbkxx/5KnIZLtXkk0eevt+HL6IuP4j6ln6aztdnP2HfGuquU2U59r2j4PAvojFqfxgq6H3TA3nHZc1xe1TvtRDXZzL+//WRSssfVwjxjI0k88zt7AYIUPU1Bo1muFRDP62pHf0ap125qa8IaPToZBQjw0ov0tly3he1vyTQ+n6380uVCBatQv68yaJG+pZ1D1o59SWj6/a8pcRbbQCN5jKcWHGsGPTnZzzzhvaQz71h5Qi67asXX7brLwdPt1WKIzaJv/N9J+Ly9vW0cjWDof1nqdFfi4C+8gXyCxgy6vEejbBJobV8lyXxvhQ330dwe5ZCekSmjsEr8H82YECqJc6HfiU2lz+RuNMs8vgw3vr20HB9BMpbx3tLwCALwQKFtpjSAqCRvavNjK77rqRmRnVVw3KGu6Z/S9NgyAMlWnsBTbd8hAg4nn9DWnyk7Lidep1s0U0puCaR43ELWDEbM9FFweyZE8Rp6P6TBGdYGlF01PQqqZQoUW2mC2SEuXcgGowTK6xtMH+dTefmmqoBgV7hJP3XNDlxSz0NXkRPFYXQF00reEBH8AL5UwM7Qj8xktTzX7ndDzVPUWhmF+fKkkxhfTKWPpPVQRFUHXpdr/eQhrihbBnXXZJfVjG4ZPN19u5WNSj1PYDN8S/fBEU+eIqM4X0J4Rp44T5CPD/W01Mzt6ZIYFr1GyrYDz4BBJOFg/HYMf3+on7MGCOh21VU/QRGsOaiBMA4rFGTfVDAUeU7WsnOSFOD4CJUXhc/o82wwMNwYjCEP4A+iwmMic67/YwEGk3IHkFY+a+UGf15nTNBvXP1CdWaow5n9dcKTw+ra+PrlYZBtO+h3o74TPoULKZtTSjecHlt8AN1e4tHlfCp2jm2EPjfntOnT8EJ5ZLsSRQZ9lsK4+VQPJpDFywiou6NO+iPO1wPPdCtM8FnEYxlQ==';const _IH='417a05cee9b6027495b442dd745c20de5806a940111208f59bfba2f5462aa2d3';let _src;

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
