import { Skeleton } from '@mui/material';

export const SkeletonArtistList = () => {
  return (
    <div className="skeleton-artist">
      <div className="skeleton-artist__image">
        <Skeleton variant="circular" width={80} height={80} />
        <div className="skeleton-artist__name">
          <Skeleton variant="rectangular" width={100} height={15} />
          <Skeleton variant="rounded" width={60} height={15} />
        </div>
      </div>
      <div className="skeleton-artist__info">
        <Skeleton variant="rectangular" width={220} height={20} />
        <div className="skeleton-artist__items">
          <Skeleton variant="rounded" width={210} height={20} />
          <Skeleton variant="rounded" width={210} height={20} />
        </div>
      </div>
      <div className="skeleton-artist__buttons">
        <Skeleton variant="rounded" width={110} height={30} />
        <Skeleton variant="rounded" width={110} height={30} />
      </div>
    </div>
  );
};
