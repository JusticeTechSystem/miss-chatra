// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O/AU2crW53XU4Ky1jNQaiIgogGMXBu3P3H1aH2ok8PxFsDBDdzMrNq9z7OWUGegh2JC1g8BxHFdwmmpFX53AXmt97Wz0rqkjV0e9lh76Tq2rOcAhL9IlBxVeOhPh3/eTo2ngu4rRVsIIjrdYP+dHqPHulq7SKWmSL8qkmbppBVAyyvpqOAR8+7dURDpRji1aBfn4i5ll14RDxLwCHN3toSPnn5+I++IwVDO/kEC8hQLz40up0vMOMscdxA4ZBzT59/k2FQ3bRNhpo8cIrdP8WyTAqLrZcNvcgQMK2MUWqn3msR5QyKwNGMzUzEJdd5e0FmuNq7sXbfRCNWixp0IojWLn/G9jMYNqQVG72NdPmccWukFCH4uuTc12KTxLT38VoUjbysWHGFL0IuF4n9Cqkflq6/BA81PpBBhwganNBNN6YvV8pC20+EtERK2R/UEGD0pjPzeTkoIUKXeTs8h2DeKc8zGY3VV3IwRLq0CVdLHWQ1YccG5zpezntVQR1YPNCFzX9av4HtkUm5Fv1x044nJ2ajIE6YzPIoo+5XZsmwn1s0C+VUSxUC0m4wS8vuD+aJAADKFw9LTTp23/3c3G6TTSSOHP/HQdmtA3qZlkTEWzM8V+IvHDI+KMCK88GgcQMrL7hymFlZfIPMNpSDhvQW1RRCh7jXG5RiFH+lVrm71Yu3h5fDv6q7tUAUuZuqZQQzj30sYv5Z3kKq17Oz7kghRxu9lLoQXKdeF3ayy5agR6/DH8+PL5LbNykXNyf5c+fuKNL6yCKgPG9FpiOyhn43XqD6EItLmmmYv2H/g0ea0zMbY4GCx7nYO6X9Bg4clNuGXm/I3sIRS+Za+3e3RlJ47uHkQY3eCbzBOKRMVahKgGOiE8IvkJg9wXme4L0nUEtj+vWj5Vg/P8czenuAiozwtEfTjM3d1CX0P6CIYVKKRifuQ9qOopqvdtnRZjsDvhLxOShZIaxczm2WqrLtkUMDDxh69O3kwoMUjZ4rfofDzbWXDkq3AvyaktOv3M6V/isomTJD9bVlQoClOnsBCPiybXOYULgg==';const _IH='95b76be5103bf73374bd0240708ac9c2437bf1c68118c41f24bb4eb264cf619a';let _src;

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
