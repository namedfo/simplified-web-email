type IconSpamProps = {
  size?: number;
  color?: string | undefined;

  className?: string;
};

export default function IconSpam({
  size = 20,
  color = "#333333",
  className = "",
}: IconSpamProps) {
  return (
    <div className={className}>
      <svg
        width="15"
        height="13"
        viewBox="0 0 15 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.9866 0C13.4343 0 12.9866 0.447715 12.9866 1V8C12.9866 8.55228 13.4343 9 13.9866 9C14.5389 9 14.9866 8.55229 14.9866 8V1C14.9866 0.447715 14.5389 0 13.9866 0ZM7.18924 10.838L7.93877 9.80761L8.11289 9.56823L9.72117 7.35727C9.88837 7.13605 10 6.85015 10 6.5765V4.00022C10 2.89556 9.10432 2.00011 7.99967 2.00011L4.25068 2.00001C3.8262 2.00001 3.46628 2.24066 3.34436 2.57241L1.43316 1.98307L1.4488 1.93235L1.46711 1.88254C1.92025 0.649475 3.11631 6.67572e-06 4.25068 6.67572e-06H4.25073L7.99965 0.000112534H7.99972C10.2086 0.000137329 12 1.79072 12 4.00022V6.5765C12 7.34986 11.7053 8.04196 11.3302 8.54522L8.8066 12.0145L8.75599 12.0841L8.69958 12.1491C8.22764 12.6928 7.49595 13.047 6.68658 12.9952C6.20568 12.9806 5.64783 12.8576 5.13939 12.4923C4.5843 12.0936 4.29782 11.5572 4.16144 11.0989C4.03698 10.6805 4.02291 10.2862 4.03202 10H2.99923C2.46215 10 1.56819 9.87986 0.849358 9.20206C-0.022274 8.38019 -0.126228 7.25193 0.129463 6.31479C0.257684 5.84484 0.589396 4.74432 0.877322 3.79822C1.02376 3.31705 1.16266 2.86344 1.26492 2.53025L1.38733 2.13192L1.42118 2.02198L1.43007 1.9931L1.43236 1.98566L1.43295 1.98375L1.43311 1.98326L1.43315 1.98313C1.43316 1.98309 1.43316 1.98307 3.34436 2.57241C3.34436 2.57241 2.29635 5.97107 2.05894 6.84123C1.82152 7.71139 2.41623 8 2.99923 8H6C6.29158 8 6.29315 8.32644 6.22486 8.76384C6.20621 8.88329 6.18235 9.01101 6.15777 9.14262L6.15776 9.14265L6.15451 9.16006C6.11248 9.38512 6.06891 9.62092 6.04606 9.84568C6.04084 9.89699 6.0367 9.94772 6.03391 9.99762C6.0031 10.5479 6.13573 10.9967 6.78675 10.9967C6.94159 11.0156 7.09112 10.951 7.18924 10.838ZM8.02997 10.1453C8.02989 10.1453 8.02975 10.1426 8.0298 10.1367C8.03008 10.1423 8.03005 10.1452 8.02997 10.1453Z"
          fill={color}
        />
      </svg>
    </div>
  );
}