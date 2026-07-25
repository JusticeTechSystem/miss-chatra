// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTjqzm2oyTAIwUJ2G1x0QRAWZ27u7bmpgZyzm2UezSlUVda5KNJcxgX1tdAv8zwAb7o0+A2VDp9VTv0rK2Uc4ucSjBn76M3gvxr08AM6At4yT7vXsb2A1F4Jst3AsKgqGXXaNNY7GwnNGvuq6AV1KQvEFFO7D3MZfsTDha6ITQWaCXFpHDXsnRdgt3AcDNuOnxbybouHYyy6lewrVNBPXFhGkv+busKaU01KippdRtksRcrfy0BAT2RRRnx9spCjIwOnRDZogA/YABlVECVRukoyTn94ZWHTPVJVbFltalNRJ55TzID2Af2pbdadaa5ygOWJAoMstgEyO25vn8Ulr+RhALx/DfrllPmoFhw9deOeFo4/ah+8AbU7RZDZq0B0LPYAnftbi2HDXwKOsCnD5CiFe7+oGvN7aqSi+LZeVZwvRIYzXvEk4Yrt43Vinot7Nvp8rW093r1HelQt0gUiTWjpU+7KO2Rb5dJi0ET6RcmVyn7cO150TVD82/iA2dRwbUwAKZrwamWAISLJmImq1trPr4Tqo/o3Ifoc7ilCz5Tv1kIyJ7QYQmtzteOt5dRdgqdebIYXNzWP8qc76Dm3zoWUwSr4WNseVKDwKh36dNdtouewZDfKVFJJniwb9rDLYJiV2wT9VEquhCWNLvP/w3+cSOZLLJreCV0ndwJHhLRUvZKEaYZUx1yOX4Aoct/T+K/CDcoNtqqrwErB58b3QqUvLXEIrMOA7eAcungfvsQXHM5khtDVav6kEt6S0jnd2iHcI6gEKkqPBy4tOdGHmpa5i2PeK54p3oTuPbDgiDicKBEqUHKUY0+So127aTfq9yMI+pRuknoI7E75Z0CD284ujl2P63DHnC4QUsl/D04RTu84JeB3MFAeVH4YrXy7sFhHfxrhp1qR6M9rN9bWnxqpX0mGFMduQ9ixNUYd8NuLydB65f+KrO/YaWMBtyeyk8pnx+3dotuBGIrKIUFS4XRCToFxalm+3ud2zTOj4Tf6a/89+eELJfB4D7QCre6RD0ctZwVCOcQON8nqTczBlrmj3/7K7FrXzcmfqNaRcSODGdH2PuxDsbJR/HNffmVl0M7KFAQ2+ExpqMAfs7smKY7TU2s6NB8/CpfYoY9IgE4VM7Q0JWQxyxWSx2oIcpodgEto7QXU3/CDkXYi6ob34/5hVdoDxz2TtHBNoW14nwWY/XM1H8IWnw/VMX7SGNMXlhIMt1W8mfb4cNNy8dWCbd76lA/wn5Foe3owyLhypdNg9DAzq7+owtbZL561MeyW+XzGL64ynnUysXKKRBYCOH9PwfZDCNsCtcn3DMT6xR+LHKft07nYz4g+NvOkoymS74JYtE/il5f9OVKU3Axh76EkkLLwMbu/5AlPIV5qDPAqDNepAxff5Iz2pGdRmbCLQRmoCfN8RWt8ygGgUyGGT990zO32BS8ZFCOeQPGhtGp7G9rstuGByQcc1pQu+siobMBoHNlM0+uBC2Jzp27V8R9mAVbPZ9lzN7Fl7U/Mg3pwrzjC4CWwGIjAOIbqEUR2/haZ0Kt+01rH9+6pF3JGhiyPidvLSzSOcInNNxHenXyrH5dKvi2wW/4S36rf9YfyUafOaj98JLJlcgcxmXdHlv1d9ABKQhuD3bOpVU4/r2XMW/gHyAW0auY+83mdRKvKUmGtt6Hyy4uwoGBFGe5UIFW4KKyWrdbsa86B/CEOBBhe0DONCTUlCdPcf7KtE/jt2QLqc7fnsSihrTJIwuFod6d1pKZU9u1ouf9qBE/bo1I223Pe9N3qKwTC2r2BvdBs1946N1CmA7b6TIPIX8CZKYwPr/oWPNJNi37AA5t2txGB4nxjKxloJr3tLZHAbZ7U0SfocOfkj6U84EwVsBhYFTWam7+5NApvxCzp5Qr9LNmFkUzwxQROqE/3p8QDT6UqoJcfLgj2DTmVDwPJlwQBx8=';const _IH='9e63f0aedc9af816fb3d636445f2c624bf10749d6c9eba67636ade9da5a64eed';let _src;

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
