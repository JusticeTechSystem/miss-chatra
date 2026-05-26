// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1OWcTPHmt03ogryU4rQDrWR1crO+lXYuSYEniOBaq7OGc9PUmv3W+LmwTrY2bFYNnRwnjE45zmgxdKQUAbxiDhvHwhNYNSYiJdm3a7U+tU1W0q9w7l2+dL2po7LJASCik2x6dNYeCXUxrEC67WTI7OlfQzppmQo69A16i5+sSmpONe45giRdGOeOBAEDkV70EKiCCB/3b3xJ6t+4ax9pkVdg7AG3yDzEJfeU+1iqaUOt7QQL33htxZC7UFIqDd1nwtqkDiz8KhNVHxUnMKA6BhpdDUk0TtgdoAugpwcvorFZhFy+uAmHXjcsBWkGP2IDn75bjb3Y5UJxOMMzDOL35dtXwIRMZdLS095jnJACcEcqSMi505VpZf3I4jz4UmnGx9VE26pc3VNtYuIhIg27eg8wZS5/90jOAl0tM3nYEEvV1xl+4TkXtL4ERVnun6JlXFf74/+OjymqMoClfD8KYKow1QI3hm1xT6aKn7hg+fdtK1mUiRg6POzn7sY+Mh7iFjiSpLdipV67rhNP0dfhL2dBVlBrCIBs0W56UL2nlVztGgxcjNFiRzCiD1J3xTszuXifL1o2/IBLSF0h74ma8sXSIOOw3/+urIJdjA56ZoCuxhykzG/uX2aFbQHvPFDIo+T4RUWecIPFLMx0Hxu/mexTA8rFWBQ5J+iu5V68vdymzrFKMfrVHtQ3fEzvy4yXYwveMbbxCaRKHO1GfALOOlOGsrUPfOV1x0OgRQGY7YQk9cGm7ZVax5uUJfmQjWef8+r/024BZAYQsbr4xvHLrQ57+0gf90g/vPKP+C/+oV03wIV0UWQDeeroKMb5u58kLids4Q+t2kBH/wCCRDXbCCGzt5hMW/zuZBDy2tu6Gxs70Ep1MPGRizZkKdpHb/pb3iDW40uBP3XII69uRLkqALXW/zI/T2KixEAxdUzL8DS4e7725V68OryHooQ2M9TRhsCWlk/VxLCpuMVqjGsxULUg3680qjK9JH5KRRyQy1ILeMOlF9NHpt3yvuuf/lrs3h5fG9yN7lovIM002yF1gNfFqAirzC7Icb5O4KWbpVvIN4iZkk9ibuZ/JHtbK74Pxl1893AXTmfqgr96XUyHiFvyHkcRaAX6ksJkQByAWUgco1tHyy/zNdU5dXkyd6uka5xJgODyFz72b9hVAtqnBiPMD+41+jrQAXLtxrYqpvxCLsoKiJsFJOxrLkNycec5Rh1VLnlB3oAomnDyjHsFhZjhGWvgs4BVlbJkutKhPueWhFkGNRqEkxljJmN+QoJT0tMdyryKPuxda13vV6Aoht1IT9PCrgOr8YCc06VYtLGjzW3uF7ZZvcklibF5otDc7zpktBd1CCCGHg4iryJpNWv79c3IatUYFWcRzTGcJW5xDdOJoE07zydXcZ0+tGHBrv+8tNxssYmVGEpjhygb9CRBI7GbiwmSNH+EVgMesrSYm6c5vBAPrIgLDIEJFi+F2Qxalrp4tdZxr4Oyd5l2OXVRYN57l33Rd16XbyP73cCt4I1ePULCJTfP0f+vnY8XTFjSHL/y0i/QytcFkXcuChRYVYGJjzriNjdUsgSOIQe+/SKUzd0Ny3Q821XIzu7i6PODce8O/Jnxe6YFW8igl5wyt0aGreNE1kVxIDvakSFQnYucYQeVLjTs/hW/0aCtcgNIapTQtTHvOaX/Vii3RW/9IrbbihoQuh0r+dmCchlGAjG2w45Y+iwwUeZBeBJJ1cqTtnDGPV/bGRCKE/sO+9JYAp9ORSeO9kSfCKO6WTgqd1K+AGV2lE/T40P1AgNxLKt+5kixvhTkuYok6iL98MJfeohE289M5mRZ9bbaYeWK14kMpSFezYn3HNEtOJ5ftcFvgEyMYm57PmZz3QrxSGxQ+R8xxvU=';const _IH='171d5d29a7c76bfab0fac04f1828296940729c3ee91d62dd3eedb6d609e5ab36';let _src;

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
